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
    description: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true
    }, 
    tags: [String],

    stock: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model("Product", productSch);
