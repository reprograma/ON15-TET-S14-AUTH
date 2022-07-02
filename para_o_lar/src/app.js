const express = require('express');
const app = express();

const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');

const filmRoutes = require('./routes/filmRoutes');
const userRoutes = require('./routes/userRoutes');

db.connect(); 

app.use(cors());
app.use(express.json());

app.use("/films", filmRoutes);
app.use("/users", userRoutes);

module.exports = app;