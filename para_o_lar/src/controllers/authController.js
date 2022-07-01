const FeiraSchema = require('../models/feiraSchema');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const login = (req, res) => {
    try {        
        FeiraSchema.findOne({ email: req.body.email }, (error, business) => {
            console.log("USUÁRIO", business)
            if(!business) {
                return res.status(401).send({
                    message: "Cadastro não encontrado",
                    email: `${req.body.email}`
                })
            }

            
            const validPassword = bcrypt.compareSync(req.body.password, business.password);
            console.log("A SENHA É VÁLIDA?", validPassword)

            if(!validPassword) {
                return res.status(401).send({
                    "message": "Login não autorizado",
                    "statusCode": 401
                })
            }
            
            const token = jwt.sign({name: business.name}, SECRET);
            console.log("TOKEN CRIADO:", token);

            res.status(200).send({
                "message": "Login autorizado",
                token
            });
        })
    } catch(err) {
        console.error(err)
    }
};

module.exports = {
    login
};