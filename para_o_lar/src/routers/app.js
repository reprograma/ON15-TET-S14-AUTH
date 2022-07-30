const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('../config/database');
const artistRoutes = require('./routes/artistRoutes');

db.connect();

app.use(cors());
app.use(express.json());
app.use("/users", artistRoutes);

module.exports = app;
