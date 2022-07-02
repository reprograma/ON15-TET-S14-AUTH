const UserSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const SECRET = process.env.SECRET


const getAll = async (request, response) => {
  const authHeader = request.get("authorization")
  const token = authHeader.split("")[1]

  if (!token) {
    return response.status(401).send("Erro no header")
  }

  jwt.verify(token, SECRET, function (erro) {
    if (erro) {
      return response.status(403).send('Não autorizado');
    }
  })

  UserSchema.find(function (erro, users) {
    if (erro) {
      response.status(500).send({ message: erro.message })
    }
    response.status(200).send(users)
  })
};

// const createUser = async (request, response) =>{
//   try {
//     const newUser = new UserSchema(
//       {name: request.body.name,
//       email: request.body.email,
//       password: request.body.password
//     },

//     )

//     const savedUser = await newUser.save()

//     response.status(201).send({
//       "message":"User criado com sucesso",
//       savedUser
//     })

//   } catch (erro) {
//     console.error(erro)
//   }

// }


const createUser = async (request, response) => {
  const hashedPassword = bcrypt.hashSync(request.body.password, 10)
  request.body.password = hashedPassword

  try {
    const newUser = new UserSchema(request.body)

    const savedUser = await newUser.save()

    response.status(201).send({
      "message": "User criado com sucesso",
      savedUser
    })
    console.log(savedUser)

  } catch (error) {
    console.error(error)
  }
}



module.exports = {
  getAll,
  createUser
};
