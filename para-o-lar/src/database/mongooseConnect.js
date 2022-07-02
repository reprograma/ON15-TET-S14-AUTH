const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI
// string de conexão com o banco de dados

//função anônima
const connect = async () => {
    try { //tente
        //esperar o mongoose conectar (await)
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('banco conectado!')
    } catch(error) {//pegar
        console.error(error)
    }
}

module.exports = { 
    connect 
};
