const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductModelSchema = Schema(
    {
        name:{
            type: String
        },
        price:{
            type: String
        },
        category:{
            type: String
        },
        description:{
            type: String
        },
    }
)

module.exports = mongoose.model("Productos", ProductModelSchema)