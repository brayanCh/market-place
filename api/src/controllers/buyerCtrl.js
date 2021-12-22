const Buyer = require("../models/sellers");

const getAllBuyers = async (req, res) => {

    Buyer.find({}, (err, all) => {
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

const createBuyer = async(req, res) => {

    try{
        const newBuyer = new Buyer({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isBanned: false,
            preferences: []
        })
        await newBuyer.save();
        res.send("created");
    }
    catch(e)
    {
        console.log(e);
        res.send("It didn't work buddy");
    }
}

const actualizePreferences = async(req,res) => {

    Seller.findById(req.body.id, (err, result) =>{
        if(err)
        {
            console.log(err);
            res.send("It didn't work buddy");
        }
        else
        {
            result.push(req.body.preferences);
            res.send("ok")
        }
    })
}

const changeName = async(req,res) => {

    Buyer.findById(req.body.id, (err, result) =>{
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

const changeBanState = async(req,res) => {
    Seller.findById(req.body.id, (err, result) =>{
        if(err)
        {
            console.log(err);
            res.send("It didn't work buddy");
        }
        else
        {
            result.isBanned = req.body.isBanned;
            res.send("changed ban state")
        }
        
    })
}


module.exports = {
    getAllBuyers: getAllBuyers,
    createBuyer: createBuyer, 
    actualizePreferences: actualizePreferences,
    changeName: changeName,
    changeBanState: changeBanState
};
