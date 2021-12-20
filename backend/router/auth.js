const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const app = express();

//imported middleware for authentication
const userAuthenticate = require("../middleware/UserAuthenticate");
const adminAuthenticate = require("../middleware/AdminAuthenticate");

//created connection with mongodb atlas cloud
require('../db/conn');

//imported schemas
const User = require("../model/userSchema");
const Admin = require("../model/adminSchema");
const Deal = require("../model/dealSchema");


//new user registration
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


//existing user login and creating token on successful login
router.post('/signin', async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "please fill the data"});
        }

        //finding the email is exists already or not
        const userLogin = await User.findOne({ email: email });

        if(userLogin){
            //comapring the password entered in login form with password stored in database
            const isMatch = await bcrypt.compare(password, userLogin.password);

            //calling the method to generate token for user
            const token = await userLogin.generateAuthToken();

            //creating the cookie for genearted token
            res.cookie('signintoken', token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true,
            });

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


//existing admin login and creating token on successful login
router.post('/adminsignin', async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "please fill the data"})
        }

        //finding the email is exists already or not
        const adminLogin = await Admin.findOne({ email: email });

        if(adminLogin){
            //comapring the password entered in login form with password stored in database
            const isMatch = await bcrypt.compare(password, adminLogin.password);

            //calling the method to generate token for user
            const token = await adminLogin.generateAuthToken();

            //creating the cookie for genearted token
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

//adding a new deal to database
router.post('/submitdeal', async (req, res) => {
    const {dealLink, dealTitle, dealPrice, dealCategory, dealImage} = req.body;

    if(!dealLink || !dealTitle || !dealPrice || !dealCategory || !dealImage) {
        return res.status(422).json({ error: "please fill the data properly"});
    }

    try{
        //finding the deal is exists already or not
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

//authenticating user
router.get('/userprofile', userAuthenticate, async (req, res) =>{
    res.send(req.rootUser);
});

//authenticating admin
router.get('/adminprofile', adminAuthenticate ,(req, res) =>{
    res.send(req.rootAdmin);
});

//user logout
// router.get('/userlogout', userAuthenticate ,(req, res) =>{
//     res.clearCookie('signintoken', {path: '/'});
//     res.status(200).send("user logout");
// });


//admin logout
// router.get('/adminlogout', adminAuthenticate ,(req, res) =>{
//     res.clearCookie('adminsigntoken', {path: '/'});
//     res.status(200).send("admin logout");
// });

module.exports = router; 