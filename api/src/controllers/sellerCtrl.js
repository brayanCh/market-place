const Seller = require("../models/sellers");
const bcrypt = require("bcryptjs");


const validate = async (req, res) => {

    Seller.find({email: req.body.email}, (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            bcrypt(req.body.password, result.password, (err, paswdAreEqual) => {

                if(paswdAreEqual)
                {

                    if(result.isBanned)
                    {
                        res.send("the user is banned");
                    }
                    else
                    {
                        res.send({
                            name: result.name,
                            profileDescription: result.profileDescription
                        });
                    }
                }
            });

        }
    });
}
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
    validate: validate,
    createSeller: createSeller, 
    actualizeProfile: actualizeProfile,
    changeName: changeName,
    changeBanState: changeBanState
};
