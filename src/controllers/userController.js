const UserSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const getAll = async (req, res) => {
  const authHeader = req.get('authorization')
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send("Erro no header")
  }

  jwt.verify(token, SECRET, (err) => {
    if(err) {
        return res.status(401).send("Não autorizado")
    }
})

  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};

// const createUser = async (req, res) => {
//  try {
//     const {
//       name, email, password
//     } = req.body;

//     if(!name || !email || !password) {
//       return res.status(404).send({ "message": "os campos não podem estar vazios" })
//     };

//     const newUser = await UserSchema.create({ name, email, password });
//     console.log("Novo usuário cadastrado", newUser);

//     const savedUser = await newUser.save();
//     console.log("Usuário salvo no banco", savedUser);

//     if(savedUser) {
//         res.status(201).send({ 
//             "message": "Usuário cadastrado com sucesso",
//             savedUser
//         });
//     };

//   } catch(error) {
//     res.status(500).json({
//       message: error.message
//   });
//     console.log(error);
//   };
// };
  
const createUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword

  const emailExists = await UserSchema.exists({ email: req.body.email })

  if(emailExists){
    res.status(401).send({
      "message": "Email já cadastrado"
    })
  }

  try {
    const newUser = new UserSchema(req.body);

    const savedUser = await newUser.save();

    res.status(201).send({
      "message": "User criado com sucesso",
      savedUser
    });
  } catch(e) {
    console.error(e);
    res.status(500).json({
      message: e.message
  });
  };
};

module.exports = {
  getAll, 
  createUser
};

