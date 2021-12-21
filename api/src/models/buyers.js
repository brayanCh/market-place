const mongoose = require("mongoose");

const buyerSch = mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    preferences: [String]
});


module.exports = mongoose.model("Buyer", buyerSch);
