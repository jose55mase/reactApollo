const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModelSchema = Schema(
    {
        name:{
            type: String
        }
    }
)

module.exports = mongoose.model("Users", UserModelSchema)