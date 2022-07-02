const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();

const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());

app.use("/book", bookRoutes);

module.exports = app;