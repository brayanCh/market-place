const mongoose = require("mongoose");

const invoiceSch = mongoose.Schema({
    buyer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true
    },
    products: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product'
        },
        Quantity:{
            type: Number,
            required: true
        }
    }],
    finalPrice: {
        type: Number,
        required: true
    }, 
    state: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Invoice", invoiceSch);
