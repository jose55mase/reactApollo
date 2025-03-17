
const specialPricesController = require("../controllers/specialPricesController")
const userController = require("../controllers/userController")
const productController = require("../controllers/productController")

const resolvers = {
    Query: {

        //@USER
        //Operaciones para usuario
        getUser: (_)=> userController.getUsers(),

        //@PRODUCT
        //Operaciones para producto
        getProduct: (_)=> productController.getProduct(),

        //@SPECIALPRICES
        //Operaciones para los precios especiales
        getSpecialPrices: (_,{user})=> specialPricesController.getSpecialPrices(user)
    },

    Mutation: {
        //@ARTICULO
        //@GUARDAR
        //Operaciones para articulos
        register:(_,{ input })=> specialPricesController.register(input)
    }
}

module.exports = resolvers;