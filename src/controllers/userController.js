const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(users)
  })
};

// const getAll = async (req, res) => {
//   const authHeader = req.get('authorization')
//   const token = authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).send("Erro no header")
//   }
  
//   jwt.verify(token, SECRET, function(erro) {
//     if (erro) {
//       return res.status(403).send('Não autorizado');
//   }
//   })
//   UserSchema.find(function (err, users) {
//     if(err) {
//       res.status(500).send({ message: err.message })
//     }
//       res.status(200).send(users)
//   }) 
// }


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

    
      const findAll = await UserSchema.exists({ email: email })

      if (findAll) {
        throw {
          statusCode: 406,
          message: "Não foi possível cadastrar novo usuário",
          details: "Já existe um cadastro com o email: " + email
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

const updateUser = async (request, response) => {
  let {email, password } = request.body

  try {
      const findUser = await UserSchema.findOne({email:email})

      if (!findUser) {
          throw {
              statusCode: 404,
              message: "Usuário não localizado",
              query: email
          }
      }

      const hashedPassword = bcrypt.hashSync(password, 10)
    password = hashedPassword

      findUser.password = password || findRestaurant.password
      

      const savedUser= await findUser.save()

      response.status(200).json({
          "Usuário atualizado": savedUser
      })
      
  } catch (error) {
      if (error.statusCode) {
          response.status(error.statusCode).json(error)
      } else {
          response.status(500).json({ message: error.message })
      }

  
  }
}

const deleteById = async (request, response) => {
  const {email} = request.body
  try {

    const findUser = await UserSchema.findOne({email: email})

      
      const deletedUser = await UserSchema.findByIdAndDelete(findUser._id)

    
        response.status(200).json([{
              "mensagem": "Item deletado com sucesso",
              "item deletado": deletedUser}])
      
  } catch (error) {
      if (error.statusCode) {
          response.status(error.statusCode).json(error)
      } else {
          response.status(500).json({ message: error.message })
      }

  }
}


module.exports = {
  getAll,
  createNewUser,
  updateUser,
  deleteById
};
