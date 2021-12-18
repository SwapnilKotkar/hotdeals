const Express = require('express');
const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");
const dotenv = require('dotenv');
// const cookies = require( "cookies" );
const app = Express();

dotenv.config({path: './config.env'});

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const UserAuthenticate = async (req, res, next) => {
    try{
        // const cookies = new Cookies( req, res )
        // const token = Cookies.get('signintoken')
        // const signintoken = token.signintoken;
        // const signintoken = JSON.stringify(token);
        // const token2 = [signintoken];
        const token = req.cookies.signintoken;
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

        next();

    }catch(err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
        // return;
    }
}

module.exports = UserAuthenticate;