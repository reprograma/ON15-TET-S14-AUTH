const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const authcontroller = require("../controllers/authController");

router.get("/all", controller.getAll);
router.post("/created/user", controller.createUser);
router.post("/login", authcontroller.login);

module.exports = router;

