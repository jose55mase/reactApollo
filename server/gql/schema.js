const { gql } = require("apollo-server");


const typeDefs = gql`
    #@USER
    #@Configuraciones para el usuario
    type Users {
        id:ID
        name:String
    }
    type Query {        
        getUser:[Users]
    }


    #@PRECIOS ESPECIALES
    #@Configuraciones para el precios especiales
    type preciosEspecialesJoseL75 {
        id:ID
        product: Product
        user: String
        specialprices: String
    }
    input PreciosEspecialesJoseL75Input{
        product: String
        user: String
        specialprices: String
    }
    type Query {
        getSpecialPrices(user:String!): [preciosEspecialesJoseL75]
    }
    type Mutation{
        register(input: PreciosEspecialesJoseL75Input) : preciosEspecialesJoseL75
    }

    #@PRODUCTOS
    #@Configuraciones para el productos
    type Product {
        id:ID
        name: String
        price: String
        category: String
        description: String
        specialprices: preciosEspecialesJoseL75
    }    
    type Query {
        getProduct: [Product]
    }
`;

module.exports = typeDefs;