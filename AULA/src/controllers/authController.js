const UserSchema = require('../models/userSchema');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const SECRET = process.env.SECRET

const login = (request, response) => {
    try {
        UserSchema.findOne({ email: request.body.email }, (error, user) => {
            console.log("Usuário", user)
            if (!user) {
                return response.status(401).send({
                    message: "User não encontrado",
                    email: `${request.body.email}`
                })
            }

            const validPassword = bcrypt.compareSync(request.body.password, user.password)
            console.log(validPassword)

            if (!validPassword) {
                return response.status(401).send({
                    "message": "Login não autorizado"
                })
            }

            //jwt.sign(nome do usuário, SEGREDO)
            const token = jwt.sign({name: user}, SECRET)
            console.log("TOKEN CRIADO", token)

            response.status(200).send({
                "message":"Login autorizado",
                token
            })
        })



    } catch (erro) {
        console.error(erro)
    }

};

module.exports = {
    login
};