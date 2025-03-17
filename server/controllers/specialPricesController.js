const SpecialPricesModelSchema = require("../models/specialPrices")


async function register(input) {
    const newSpecialPrices = input;
    try{
        const specialprices = new SpecialPricesModelSchema(newSpecialPrices)
        specialprices.save();
        return specialprices;
    }catch(err) {
        console.log("Error ----> ",err )
    }
}

async function getSpecialPrices(user){
    const respons = await SpecialPricesModelSchema.find({user}).populate("product")
    return respons;
}

module.exports = {
    register,getSpecialPrices
}