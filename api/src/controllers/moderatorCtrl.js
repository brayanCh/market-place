const Moderator = require("../models/moderators");
const bcrypt = require("bcryptjs");

const getAllMods = async (req, res) => {

    Moderator.find({}, (err, all) => {
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

    Moderator.find({email: req.body.email}, (err, result) => {
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

const createMod = async(req, res) => {

    try{


        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {

                const newMod = new Moderator({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                })

                newMod.save();
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

module.exports = {
    getAllMods: getAllMods,
    createMod: createMod, 
    authentificate, authentificate
};
