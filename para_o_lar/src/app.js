const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./config/database');
const feiraRoutes = require('./routes/feiraRoutes');

db.connect();

app.use(cors());
app.use(express.json());
app.use("/feira", feiraRoutes);

module.exports = app;