const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;


// app.get('/about', (req, res) =>{
//     res.send(`Hello from about`);
// });

app.get('/contact', (req, res) =>{
    res.send(`Hello from contact`);
});

// app.get('/signin', (req, res) =>{
//     res.send(`Hello from signin`);
// });

app.get('/signup', (req, res) =>{
    res.send(`Hello from signup`);
});

app.listen(PORT, () =>{
    console.log(`server is running at port no ${PORT}`);
}); 