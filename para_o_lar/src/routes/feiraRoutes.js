const express = require("express");
const router = express.Router();

const controller = require("../controllers/feiraController");
const authController = require("../controllers/authController");

const { checkAuth } = require("../middlewares/auth");

router.get("/all", checkAuth, controller.getAll);

router.post("/register", controller.registerBusiness);

router.post('/login', authController.login);


module.exports = router;