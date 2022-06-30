const UserSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};

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
  getAll,
  createUser
};