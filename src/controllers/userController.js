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

const createUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword;
  //"senhadifícil" = "

  

 
  try {
   
    const newUser = new UserSchema({ name: req.body.name, 
        email: req.body.email, 
        password: req.body.password
      });

    const savedUser = await newUser.save();

      res.status(201).send({
        "message": "User criado com sucesso",
        savedUser
      });

  } catch(e) {
    console.error(e);
  };
};


module.exports = {
  getAll,createUser
};

