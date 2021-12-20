const mongoose = require('mongoose');
const dotenv = require('dotenv');


//imported config.env
dotenv.config({path: './config.env'});


//created database on mongodb atlas cloud
//stored cloud database link in the DB variable
const DB = process.env.DATABASE;

//created connection between JS nad mongodb atlas cloud
mongoose.connect(DB, {
    useNewUrlParser: true}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(err));