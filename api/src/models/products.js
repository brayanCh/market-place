const mongoose = require("mongoose");

const productSch = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    content: {
        type: String,
        required: true
    }, 

});


module.exports = mongoose.model("Product", productSch);
