const mongoose = require("mongoose");

const productSch = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 

});


module.exports = mongoose.model("Product", productSch);
