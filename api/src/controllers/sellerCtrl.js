const Seller = require("../models/sellers");
const bcrypt = require("bcryptjs");

const getAllSellers = async (req, res) => {

    Seller.find({}, (err, allSellers) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(allSellers); 
        }
    });
};

const createSeller = async(req, res) => {

    try{


        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {

                const newSeller = new Seller({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    isBanned: false,
                })

                newSeller.save();
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

const actualizeProfile = async(req,res) => {

    Seller.findById(req.body.id, (err, result) =>{
        if(err)
        {
            console.log(err);
            res.send("It didn't work buddy");
        }
        else
        {
            result.profileDescription = req.body.profileDescription;
            res.send("profile description added")
        }
    })
}

const changeName = async(req,res) => {

    Seller.findById(req.body.id, (err, result) =>{
        if(err)
        {
            console.log(err);
            res.send("It didn't work buddy");
        }
        else
        {
            result.name = req.body.name;
            res.send("changed name")
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
    getAllSellers: getAllSellers,
    createSeller: createSeller, 
    actualizeProfile: actualizeProfile,
    changeName: changeName,
    changeBanState: changeBanState
};
