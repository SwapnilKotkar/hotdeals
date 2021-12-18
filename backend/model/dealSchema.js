const mongoose = require('mongoose');
 
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

const Deal = mongoose.model('DEAL', dealSchema);

module.exports = Deal;