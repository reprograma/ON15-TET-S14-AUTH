const express = require('express')
const app = express()


const cors = require('cors')
app.use(cors())

app.use(express.json())
require('dotenv-safe').config()

const db = require('./database/mongoConnect')
db.connect()

const userRoutes = require('./routes/userRoutes')
app.use("/user", userRoutes)


// coleção para o cadastro de alunos por meio do funcionario da academia

const cadastroDeAlunosPorMeioDoFuncionario = require('./routes/cadastroDeAlunosPeloFuncionario')
app.use("/cadastro", cadastroDeAlunosPorMeioDoFuncionario)

module.exports = app