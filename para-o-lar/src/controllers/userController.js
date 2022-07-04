const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const getAll = async (req, res) => {
    const authHeader = req.get("authorization")
    const token = authHeader.split(" ")[1]

    if (!token) {
    return res.status(401).send("Erro no header")
    }

    jwt.verify(token, SECRET, (error) => {
        if (error) {
        return res.status(401).send("Não autorizado")
        }
    })

    UserSchema.find(function (err, users) {
        if (err) {  
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(users)
    })
}

const createUser = async (req, res) => {
    try {
        if (!req.body.name && !req.body.email) {
            res.status(404).send({
            message: "Os campos obrigatórios precisam ser preenchidos.",
            statusCode: 404,
        })
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 10)

    let { name, email, password } = req.body;
    password = hashedPassword

    const newUser = await UserSchema.create({ name, email, password })
    const savedUser = await newUser.save()

    if (savedUser) {
        res.status(201).send({
        message: "Usuário cadastrado com sucesso",
        savedUser,
        })
    }
    } catch (error) {
        res.status(500).send({ message: error.message })
}
}

module.exports = {
    getAll,
    createUser,
}
