const jwt = require('jsonwebtoken');
const Admin = require("../model/adminSchema");
const dotenv = require('dotenv');
const Cookies = require( 'cookies' );

dotenv.config({path: './config.env'});

const AdminAuthenticate = async (req, res, next) => {
    try{
        // const cookies = new Cookies(req, res)
        const token = cookies.get('adminsignintoken');
        console.log(token);
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootAdmin = await Admin.findOne({_id: verifyToken._id, "tokens.token": token });

        if(!rootAdmin) {
             throw new Error('admin not found')
        }
        else{
            res.status(500).send('admin found');
            // return;
        }

        req.token = token;
        req.rootAdmin = rootAdmin;
        req.userID = rootAdmin._id;

        next();

    }catch(err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
        // return;
    }
}

module.exports = AdminAuthenticate;