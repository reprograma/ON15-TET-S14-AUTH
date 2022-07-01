const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    UserSchema.find(function (err, users) {
      if (err) {
        res.status(500).json({ message: err.message })
      }
      res.status(200).json({
        data: users
      })
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserSchema.findById(userId);
    if (!user) throw new Error('Usuário não existe');

    res.status(200).json({
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const signup = async (req, res, next) => {
  let { name, email, password, role } = req.body

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

    const newUser = new UserSchema({
      name, email, password: hashedPassword, role: role || "basic"
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

const updateUserPassword = async (req, res) => {
  let { password } = req.body

  try {
    const findUser = await UserSchema.findById(req.params.id)

    if (findUser.length == 0) {
      throw {
        statusCode: 404,
        message: "Usuário não localizado",
        query: email
      }
    }

    const hashedPassword = bcrypt.hashSync(password, 10)
    password = hashedPassword

    findUser.password = password || findUser.password


    const savedUser = await findUser.save()

    res.status(200).json({
      "Usuário atualizado": savedUser
    })

  } catch (error) {
    if (error.statusCode) {
      res.status(error.statusCode).json(error)
    } else {
      res.status(500).json({ message: error.message })
    }


  }
}

const updateUser = async (req, res) => {
  try {
    const update = req.body
    const userId = req.params.id;

    await UserSchema.findByIdAndUpdate(userId, update);
    const user = await UserSchema.findById(userId)
    res.status(200).json({
      message: 'Usuário atualizado',
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteById = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await UserSchema.findByIdAndDelete(userId)


    res.status(200).json([{
      "mensagem": "Item deletado com sucesso",
      "item deletado": deletedUser
    }])

  } catch (error) {
    if (error.statusCode) {
      res.status(error.statusCode).json(error)
    } else {
      res.status(500).json({ message: error.message })
    }

  }
}



module.exports = {
  getUsers,
  getUserById,
  signup,
  updateUserPassword,
  updateUser,
  deleteById
}
