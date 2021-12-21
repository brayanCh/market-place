const mongoose = require("mongoose");

const reviewSch = mongoose.Schema({

    buyer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    content: {
        type: String,
        required: true
    }, 
    stars: {
        type: Number,
        required: true
    } 
});


module.exports = mongoose.model("Product", reviewSch);
