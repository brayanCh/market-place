const Product = require("../models/products");

const getAllProducts = async (req, res) => {

    Product.find({}, (err, all) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(all); 
        }
    });
};

const createProduct = async(req, res) => {

    try{
        const newProduct = new Product({
            name: req.body.name,
            seller_id: req.body.seller_id,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            stock: req.body.stock
        })
        await newProduct.save();
        res.send("created");
    }
    catch(e)
    {
        console.log(e);
        res.send("It didn't work buddy");
    }
}

const actualizeTags = async(req,res) => {

    Product.findById(req.body.id, (err, result) =>{
        if(err)
        {
            console.log(err);
            res.send("It didn't work buddy");
        }
        else
        {
            result.push(req.body.tags);
            res.send("ok")
        }
    })
}

const findBySeller = async(req,res) => {

    Product.find({seller_id: req.body.id}, (err, result) =>{
        if(err)
        {
            console.log(err);
            res.send("It didn't work buddy");
        }
        else
        {
            res.send(result);
        }
    })
}


const changeName = async(req,res) => {

    Product.findById(req.body.id, (err, result) =>{
        if(err)
        {
            console.log(err);
            res.send("It didn't work buddy");
        }
        else
        {
            result.name = req.body.name;
            res.send("name changed")
        }
        
    })
}


module.exports = {
    getAllProducts: getAllProducts,
    createProduct: createProduct, 
    actualizeTags: actualizeTags,
    findBySeller: findBySeller,
    changeName: changeName
};
