const express = require("express");
const router = express.Router();

const controller = require("../controller/userController");
const authController = require("../controller/authController");

router.get("/all", controller.getAll);

router.post("/create", controller.createUser);

router.post('/login', authController.login);

module.exports = router;