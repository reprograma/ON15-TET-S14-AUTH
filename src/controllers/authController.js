const UserSchema = require('../models/userSchema');
<<<<<<< HEAD
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;
=======
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
>>>>>>> 3a17d9db4b2b11e889c721545fea9312b22c1e6a

const SECRET = process.env.SECRET;

// login = autenticação
const login = (req, res) => {
<<<<<<< HEAD
    try{
        UserSchema.findOne({ email: req.body.email }, (error, user) => {
=======
    try {
        // UserSchema.findOne(filtro é o email do usuario, função anônima)
        UserSchema.findOne({ email: req.body.email }, (error, user) => {
            console.log("USUÁRIO", user)
>>>>>>> 3a17d9db4b2b11e889c721545fea9312b22c1e6a
            if(!user) {
                return res.status(401).send({
                    message: "User não encontrado",
                    email: `${req.body.email}`
                })
            }
<<<<<<< HEAD
            const validPassword = bcrypt.compareSync(req.body.password, user.password)

            if(!validPassword) {
              return res.status(401).send({
                  message: "Login não autorizado"
              })
            }
            const token = jwt.sign({ name: user.name }, SECRET)
    
            res.status(200).send({
                message: "Login autorizado",
                token
            })
        })


    }catch(error){
        res.status(500).json({message: error.message})
=======

            // o que eu tenho: usuário que veio da requisição e o usuário encontrado no banco dados. ambos os usuários possuem o mesmo email, agora preciso verificar se eles tbm possuem a mesma senha

            const validPassword = bcrypt.compareSync(req.body.password, user.password);
            console.log("A SENHA É VÁLIDA?", validPassword)

            if(!validPassword) {
                return res.status(401).send({
                    "message": "Login não autorizado",
                    "statusCode": 401
                })
            }

            // jwt.sign(nome do usuário, SEGREDO)
            const token = jwt.sign({name: user.name}, SECRET);
            console.log("TOKEN CRIADO:", token);

            res.status(200).send({
                "message": "Login autorizado",
                token
            });
        })
    } catch(err) {
        console.error(err)
>>>>>>> 3a17d9db4b2b11e889c721545fea9312b22c1e6a
    }
};

module.exports = {
    login
};