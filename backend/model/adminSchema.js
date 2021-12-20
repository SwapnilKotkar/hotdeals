const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
 
//created admin schema to store credientials on mongodb cloud
const adminSchema = new mongoose.Schema({
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
})

//this method will execute before 'save()' method gets called
adminSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        // bycrypt will hash the password before sending it to database
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});


//here we are generating token after admin's successful login
adminSchema.methods.generateAuthToken = async function () {
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
const Admin = mongoose.model('ADMIN', adminSchema);

module.exports = Admin;