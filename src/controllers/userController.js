const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

// const getAll = async (req, res) => {
//   UserSchema.find(function (err, users) {
//     if (err) {
//       res.status(500).send({ message: err.message })
//     }
//     res.status(200).send(users)
//   })
// };

const getAll = async (req, res) => {
  const authHeader = req.get('authorization')
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send("Erro no header")
  }
  
  jwt.verify(token, SECRET, function(erro) {
    if (erro) {
      return res.status(403).send('Não autorizado');
  }
  })
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
}


const createNewUser = async (req, res) => {
  let { name, email, password } = req.body

  try {

    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,20}$/

    if (password) {
      if (!password.match(passw)) {
        throw {
          statusCode: 406,
          message: "Não foi possível cadastrar senha",
          details: "A senha precisa atender aos seguintes requisitos:",
          requirements: {
            caracteres: "entre 7 e 20",
            tipo: "números, letras, caracter especial",
            obrigatório: "Pelo menos um número, uma letra maiúscula, uma minúscula e um caracter especial"

          }
        }
      }
    }

    if (email) {
      const findAll = await UserSchema.find({ email: email })

      if (findAll.length != 0) {
        throw {
          statusCode: 406,
          message: "Não foi possível cadastrar novo usuário",
          details: "Já existe um cadastro com o email: " + email
        }
      }
    }
    
    const hashedPassword = bcrypt.hashSync(password, 10)
    password = hashedPassword

    const newUser = new UserSchema({
      name, email, password
    })

    const savedUser = await newUser.save()

    if (savedUser) {
      res.status(201).json({
        "Mensagem": "Usuário cadastrado com sucesso",
        "Novo Usuário": savedUser
      })
    }
  } catch (error) {
    if (error.statudCode) {
      res.status(error.statusCode).json(error)
    } else {
      res.status(500).json({
        message: error.message,
        details: error.details,
        requirements: error.requirements
      })
    }
  }
}

module.exports = {
  getAll,
  createNewUser
};
