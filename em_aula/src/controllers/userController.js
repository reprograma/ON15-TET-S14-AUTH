const UserSchema = require("../models/userSchema")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

const getAll = async (req, res) => {
  const authHeader = req.get('Authorization')
  const token = authHeader.split(' ')[1]

  //usar o token no headers junto com key: authentication value: Baerer no query para decodificar o usuário 

  if(!token) {
    return res.status(401).send({"message": "Erro no header"})
  }

  jwt.verify(token, SECRET, function(erro) {
    if (erro) {
      return res.status(403).send('Não autorizado')
  }
  })
  
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    } 
      res.status(200).send(users)
  }) 
}

const createUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
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

    const savedUser = await user.save()
   
    res.status(201).send(savedUser)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

module.exports = {
  getAll,
  createUser
}