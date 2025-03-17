const UserModelSchema = require("../models/userModel")

async function getUsers(){
    const respons = await UserModelSchema.find({})
    return respons;
}

module.exports = {
    getUsers
}