const Buyer = require("../models/buyers");
const bcrypt = require("bcryptjs");

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

const authentificate = async (req, res) => {

    Buyer.find({email: req.body.email}, (err, result) => {
        if(err)
        {   
            console.log(err);
        }
        else
        {
            if(result === [])
            {
                let key = Math.round(Math.random() * 1000000);
                // send mail
            }
            else
            { 
                res.send("This mate is already here");
            }
        }
    });
}


const createBuyer = async(req, res) => {

    try{


        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {

                const newBuyer = new Buyer({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    isBanned: false,
                    preferences: []
                })

                newBuyer.save();
                res.send("created");
            });
        });
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
    changeBanState: changeBanState,
    authentificate: authentificate
};
