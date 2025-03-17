const mongoose = require("mongoose");
const {ApolloServer} = require("apollo-server")
const typeDefs = require("./gql/schema")
const resolvers = require("./gql/resolver")

require("dotenv").config({path:".env"})


mongoose.connect(process.env.BBDD)
    .then(() => server())
    .catch((err) => console.log("ERROR CONNECTING", err));

/*mongoose.connect(process.env.BBDD,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    }, (err, res) => {
        if(err) {
            console.log("Error al conectar")
        }else{
            console.log("Todo salio bien en la CONEXION")
        }
    }
)*/

function server() {
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers
    })
    serverApollo.listen().then((response)=> {
        console.log(response)
        console.log("Server runnig")
    }).catch((err) => console.error("Error corriendo Apollo"))
}