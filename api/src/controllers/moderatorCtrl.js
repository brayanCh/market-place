const Moderator = require("../models/moderators");

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

const createMod = async(req, res) => {

    try{
        const newMod = new Moderator({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        await newMod.save();
        res.send("created");
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
};
