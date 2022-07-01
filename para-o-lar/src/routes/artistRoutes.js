const express = require('express')

const router = express.Router()

const controller = require("../controller/artistController")
const authController = require("../controller/authController");


router.get("/all", controller.getAll);
router.get("/create", controller.createArtist);
router.post("/login", authController.login);


module.exports = router;