const UserSchema = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

const createUser = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword      

    try {
        const user = new UserSchema({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        const emailExists = await UserSchema.exists({ email: req.body.email })
        if(emailExists) {
         return res.status(400).send({
              "message": "Email já cadastrado"
          })}

        if(user.name === "" || user.email === "" || user.password === "") {
            return res.status(400).send({ "message": "Preencha todos os campos" })
        }

        const savedUser = await user.save();
       
        res.status(201).send(savedUser);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    createUser
}