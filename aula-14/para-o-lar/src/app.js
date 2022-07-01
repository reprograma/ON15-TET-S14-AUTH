const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./Config/dataBase');
const admRoutes = require('./Routes/admRoutes');

db.connect() ;

app.use(cors());
app.use(express.json());
app.use("/adm", admRoutes);

module.exports = app;