const Seller = require("../models/sellers");

const getAllSellers = async (res,req) => {

    Seller.find({}, (err, allSellers) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            await res.send(allSellers); 
        }
    }

}

const createSeller = async(res,req) => {

    try{
        const newSeller = new Seller({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isBanned: false,
        })
        await newSeller.save();
        res.send("created");
    }
    catch(e)
    {
        console.log(e);
        res.send("It didn't work buddy");
    }
}

const addProfileDescription = async(res,req) => {

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

module.exports = {
    getAllSellers: getAllSellers,
    createSeller: createSeller, 
    addProfileDescription: addProfileDescription
};
