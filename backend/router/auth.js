const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const app = express();
const cookieParser = require('cookie-parser');

const userAuthenticate = require("../middleware/UserAuthenticate");
const adminAuthenticate = require("../middleware/AdminAuthenticate");

require('../db/conn');
const User = require("../model/userSchema");
const Admin = require("../model/adminSchema");
const Deal = require("../model/dealSchema");

router.get('/', (req, res) =>{
    res.send(`Hello from router js`);
});


router.post('/register', async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName || !email || !password) {
        return res.status(422).json({ error: "please fill the data properly"});
    }

    try{
        const userExist = await User.findOne({email: email});

        if(userExist) {
            return res.status(422).json({error: "Email already Exist"});
        }

        const user = new User({firstName, lastName, email, password});

        await user.save();
       
        res.status(201).json({ message: "user registered successfully"});

    } catch(err){ 
        console.log(err);  
    }

});

router.post('/signin', async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "please fill the data"});
        }

        const userLogin = await User.findOne({ email: email });

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();

            res.cookie('signintoken', token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });
            // console.log(req.cookies.signintoken); 

            if(!isMatch){
                res.status(400).json({error: "user invalid pass"});
            }else{
                res.json({ message: "user signin successfully"});
        }            
        }else{
            res.status(400).json({error: "user invalid"});             
        }
        
    } catch(err){
         console.log(err);  
        }
});

router.post('/adminsignin', async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "please fill the data"})
        }

        const adminLogin = await Admin.findOne({ email: email });

        if(adminLogin){
            const isMatch = await bcrypt.compare(password, adminLogin.password);

            const token = await adminLogin.generateAuthToken();

            res.cookie("adminsignintoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            }); 

            if(!isMatch){
                res.status(400).json({error: "admin invalid pass"})
            }else{
                res.json({ message: "admin signin successfully"});
        }            
        }else{
            res.status(400).json({error: "admin invalid"});             
        }
        
    } catch(err){
         console.log(err);  
        }
});

router.post('/submitdeal', async (req, res) => {
    const {dealLink, dealTitle, dealPrice, dealCategory, dealImage} = req.body;

    if(!dealLink || !dealTitle || !dealPrice || !dealCategory || !dealImage) {
        return res.status(422).json({ error: "please fill the data properly"});
    }

    try{
        const dealExist = await Deal.findOne({dealLink: dealLink});

        if(dealExist){
            return res.status(422).json({error: "Deal already Exist"});
        }

        const deal = new Deal({dealLink, dealTitle, dealPrice, dealCategory, dealImage});

        await deal.save();

        res.status(201).json({ message: "Deal submitted successfully"});

    }catch(err){
        console.log(err);
    }
});

app.use(cookieParser());
router.get('/userprofile', async (req, res) =>{
    const token = req.cookie.signintoken;
        console.log(token);
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token });

        if(!rootUser) { 
            throw new Error('User not found');
        }       
        else{
            res.status(500).send('user found');
            // return;
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

    res.send(req.rootUser);
    console.log(req.rootUser);
});

router.get('/adminprofile', adminAuthenticate ,(req, res) =>{
    res.send(req.rootAdmin);
});

router.get('/userlogout', userAuthenticate ,(req, res) =>{
    res.clearCookie('signintoken', {path: '/'});
    res.status(200).send("user logout");
});

// router.get('/adminlogout', adminAuthenticate ,(req, res) =>{
//     res.clearCookie('adminsigntoken', {path: '/'});
//     res.status(200).send("admin logout");
// });


module.exports = router; 