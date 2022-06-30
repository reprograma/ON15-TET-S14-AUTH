const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();
app.use(express.json());

const db = require('./config/database');
db.connect();

const storeRoutes = require('./routes/storeRoutes');

app.use("/store", storeRoutes);

module.exports = app;
