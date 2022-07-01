const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./config/database');
const storeRoutes = require('./routes/StoreRoutes');

db.connect();

app.use(cors());
app.use(express.json());
app.use("/stores", storeRoutes);

module.exports = app;