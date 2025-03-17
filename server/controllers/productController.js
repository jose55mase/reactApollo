const ProductModelSchema = require("../models/ProductoModel")

async function getProduct(){
    const respons = await ProductModelSchema.find({})
    return respons;
}

module.exports = {
    getProduct
}