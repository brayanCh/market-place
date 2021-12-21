const mongoose = require("mongoose");

const sellerSch = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
    },
    isBanned: {
        type: Boolean,
        required: true,
    },
    profileDescription: String
});


module.exports = mongoose.model("Seller", sellerSch);
