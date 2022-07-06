const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv-safe').config();
const banco = require('../src/config/database')
const router = require('../src/routes/userRoutes')
banco.connect()
app.use(express.json())
app.use(cors())
app.use('/post',router)

module.exports = app