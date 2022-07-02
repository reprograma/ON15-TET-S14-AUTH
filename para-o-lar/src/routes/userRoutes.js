const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController")
const authController = require("../controllers/authController")

router.post("/create", controller.createUser);