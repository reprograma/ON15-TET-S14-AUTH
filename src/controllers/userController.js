const UserSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');


const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};

const createUser = async (req, res) =>{
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword

    if(!req.body.name || !req.body.email || !req.body.password){
      res.status(404).send({
        "message": "Os campos obrigatórios precisam ser enviados",
        "statusCode": 404
      })
    }

    const newUser = new UserSchema({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password

    });
    const saverUser = await newUser.save();
    if(saverUser) {
      res.status(201).send({
        "message": "Nota criada com sucesso",
        saverUser
      })
    }
    
  } catch(error) {
    console.error(error);
    res.status(500).json({
      message: e.message
    })

  };
};

module.exports = {
  getAll,
  createUser
};



// name: {
//   type: String,
//   required: true
// },
// email: {
//   type: String,
//   required: true
// },
// password: {
//   type: String,
//   required: false
// },
// createdAt: {
//   type: Date,
//   default: new Date()