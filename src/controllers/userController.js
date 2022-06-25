const userSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;



const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(users)
  })
};



const creatUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword

  try {

    const newUser = new userSchema({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      createdAt: new Date()


    })


    const savedUser = await newUser.save();

    if (savedUser) {
      res.status(201).send({

        "message": "User criado com sucesso! :)",


        savedUser

      })

    }

  } catch (error) {
    console.error(error);

  }

}





module.exports = {
  getAll,
  creatUser
};
