const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();
app.use(express.json());

const db = require('./src/config/database');
db.connect();

const clientRoutes = require('./src/routes/clientsRouts');
const ordersRoutes = require('./src/routes/ordersRouts')
const userRoutes = require('./src/routes/userRoutes')


app.use("/client", clientRoutes);
app.use("/order", ordersRoutes);
app.use("/user", userRoutes);


module.exports = app;

