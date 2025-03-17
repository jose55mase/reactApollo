const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpecialPricesModelSchema = Schema(
    {
        product:{
            type: Schema.Types.String,
            ref: "Productos"
        },
        user:{
            type: String
        },
        specialprices: {
            type: String
        }
    }
)

module.exports = mongoose.model("preciosEspecialesJoseL75", SpecialPricesModelSchema)