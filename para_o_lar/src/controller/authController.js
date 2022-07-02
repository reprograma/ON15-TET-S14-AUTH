const UserSchema = require('../models/userSchema')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET

const login = (request, response) => {
    try {
        // UserSchema.findOne(filtro é o email do usuario, função anônima)
        UserSchema.findOne({ email: request.body.email }, (error, user) => {
            console.log("USUÁRIO", user)
            if(!user) {
                return response.status(401).send({
                    message: "User não encontrado",
                    email: `${request.body.email}`
                })
            }

            // o que eu tenho: usuário que veio da requisição e o usuário encontrado no banco dados. ambos os usuários possuem o mesmo email, agora preciso verificar se eles tbm possuem a mesma senha

      const validPassword = bcrypt.compareSync(request.body.password, user.password)
      console.log(validPassword)

	  if(!validPassword) {
   		 return response.status(401).send({
     		   message: "Login não autorizado"
   		 })
 	  }

    const token = jwt.sign({name: user.name}, SECRET)
    console.log("Token criado:", token)

       response.status(200).send({
           "message": "Login autorizado",
           token
       });

        })
    } catch(error) {
        console.error(error)
    }
}

module.exports = {
    login,
  
}

