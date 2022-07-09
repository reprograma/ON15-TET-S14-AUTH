const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./config/database');
const establishmentRoutes = require('./routes/establishmentRoutes');

db.connect() ;

app.use(cors());
app.use(express.json());
app.use("/establishment", establishmentRoutes);

module.exports = app;