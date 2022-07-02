const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();

const db = require('./database/mongooseConnect');

db.connect(); 

const filmeRoutes = require('./routes/filmeRoutes');
const userRoutes = require('./routes/userRoutes');



app.use(express.json());
app.use("/filmes", filmeRoutes);
app.use("/users", userRoutes);


module.exports = app;
