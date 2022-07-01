const Store = require('../models/StoreSchema');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const login = (req, res) => {
    try {
        
        Store.findOne({ email: req.body.email }, (error, user) => {
            console.log("USUÁRIO", user)
            if(!user) {
                return res.status(401).send({
                    message: "User não encontrado",
                    email: `${req.body.email}`
                })
            }

            

            const validPassword = bcrypt.compareSync(req.body.password, user.password);
            console.log("A SENHA É VÁLIDA?", validPassword)

            if(!validPassword) {
                return res.status(401).send({
                    "message": "Login não autorizado",
                    "statusCode": 401
                })
            }

            
            const token = jwt.sign({name: user.name}, SECRET);
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