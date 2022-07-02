const express = require ("express")
const app = express()

const cors = require("cors")
app.use(cors())

require("dotenv-safe").config()

const db = require("./config/database")
db.connect()

app.use(express.json())

const albumRoutes = require("./routes/albumRoutes")
const artistRoutes = require("./routes/artistRoutes")
const userRoutes = require('./routes/userRoutes')

app.use("/album", albumRoutes)
app.use("/artist", artistRoutes)
app.use("/users", userRoutes)

module.exports = app