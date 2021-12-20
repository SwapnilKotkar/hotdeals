const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//created admin schema to store credientials on mongodb cloud
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    tokens:[
        {
            token: {
                type: String,
                required:true
            }
        }
    ]
});

//this method will execute before 'save()' method gets called
userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        // bycrypt will hash the password before sending it to database
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

//here we are generating token after user's successful login
userSchema.methods.generateAuthToken = async function () {
    try{

        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    }catch(err) {
        console.log(err);
    }
}

//given a name for collection for storing documents on mongodb cloud
const User = mongoose.model('USER', userSchema);

module.exports = User;