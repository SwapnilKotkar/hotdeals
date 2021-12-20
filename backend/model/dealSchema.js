const mongoose = require('mongoose');
 
//created deal schema to store deal details on mongodb cloud
const dealSchema = new mongoose.Schema({
    dealLink: {
        type: String,
        required:true
    },
    dealTitle: {
        type: String,
        required:true
    },
    dealPrice: {
        type: String,
        required:true
    },
    dealCategory: {
        type: String,
        required:true
    },
    dealImage: {
        type: String,
        required:true
    }
});

//given a name for collection for storing documents on mongodb cloud
const Deal = mongoose.model('DEAL', dealSchema);

module.exports = Deal;