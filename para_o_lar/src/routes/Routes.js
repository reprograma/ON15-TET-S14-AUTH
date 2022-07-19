const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const authController = require("../controllers/authController");

const { checkAuth } = require("../middlewares/auth");

router.get("/all", checkAuth, controller.getAll);

router.post("/create", controller.createUser);

router.post('/login', authController.login);

router.delete("/delete/:id", checkAuth, controller.deleteUser);

module.exports = router;