const admSchema = require('../Model/admSchema');
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken")

const SECRET = process.env.SECRET;
const login = (request, response) => {
    try {
        // UserSchema.findOne(filtro é o email do usuario, função anônima)
        admSchema.findOne({ email: request.body.email }, (error, adm) => {
            console.log("USUÁRIO", adm)
            if(!adm) {
                return response.status(401).send({
                    message: "Adm não encontrado",
                    email: `${request.body.email}`
                })
            }
            const validPassword = bcrypt.compareSync(request.body.password, adm.password);
            console.log(validPassword)

	  if(!validPassword) {
   		 return response.status(401).send({
     		   message: "Login não autorizado"
   		 })
 	  }
     const token = jwt.sign({name: adm.name}, SECRET)
     console.log("Token Criado", token);
     response.status(200).send({
        "message": "Login autorizado",
        token
     });
        })
    } catch(err) {
        console.error(err)
    }
}

module.exports = {
    login
};
