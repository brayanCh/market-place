const mongoose = require("mongoose");

const modSch = mongoose.Schema({
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

});


module.exports = mongoose.model("Moderator", modSch);
