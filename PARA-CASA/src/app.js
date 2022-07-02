const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();

const filmesRoutes = require('./routes/filmesRouters');

app.use(express.json());
app.use("/filmes", filmesRoutes);

module.exports = app;