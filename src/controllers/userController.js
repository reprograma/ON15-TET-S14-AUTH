const userSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};

const createUser = async (request, response) => {
  const hashedPassword = bcrypt.hashSync(request.body.password, 10)
  request.body.password = hashedPassword

  try {
    
    const newUser = new userSchema(request.body);
    const savedUser = await newUser.save();
    response.status(201).send({
      "message":" User criado com sucesso",
      savedUser
    })

      
  
  } catch (error) {
    console.error(err);
  }
}


module.exports = {
  getAll,
  createUser
};
