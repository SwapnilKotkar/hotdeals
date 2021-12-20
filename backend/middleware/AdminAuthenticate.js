const jwt = require('jsonwebtoken');
const Express = require('express');
const dotenv = require('dotenv');
const app = Express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

//imported adminSchema
const Admin = require("../model/adminSchema");

dotenv.config({path: './config.env'});

//fetching cookie from website and verifying it
const AdminAuthenticate = async (req, res, next) => {
    try{
        const cookies = req.cookies.adminsignintoken;
        const token = cookies.get('adminsignintoken');
        console.log(token);

        //verifying the token with SECRET_KEY
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootAdmin = await Admin.findOne({_id: verifyToken._id, "tokens.token": token });

        if(!rootAdmin) {
             throw new Error('admin not found')
        }
        else{
            res.status(500).send('admin found');
        }

        req.token = token;
        req.rootAdmin = rootAdmin;
        req.userID = rootAdmin._id;

        next();

    }catch(err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
}

module.exports = AdminAuthenticate;