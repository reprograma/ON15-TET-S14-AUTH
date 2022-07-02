const UserSchema = require("../models/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

// autenticação (login)
const login = async (request, response) => {
    try {
        UserSchema.findOne({email: request.body.email}, (error, user) => {
            if(!user) {
                return response.status(401).send({
                    message: "User não encontrado",
                    email: `${request.body.email}`
                })
            }

            //O user da requisição e do banco possuem o mesmo email, verificar agora se possuem a mesma senha
            const validPassword = bcrypt.compareSync(request.body.password, user.password) //retorna um boolean
            console.log("A SENHA É VÁLIDA?", validPassword)

            if(!validPassword) {
                return response.status(401).send({
                    "message": "Login não autorizado",
                    "statusCode": 401
                })
            }
            // jwt.sign(nome do usuário, SEGREDO)
            const token = jwt.sign({name: user.name}, SECRET)
            console.log("TOKEN CRIADO:", token)

            response.status(200).send({
                "message": "Login autorizado",
                token
            })
        })

    } catch(error) {
    response.status(500).send({message: error.message})
    }
}

module.exports = {
    login
}