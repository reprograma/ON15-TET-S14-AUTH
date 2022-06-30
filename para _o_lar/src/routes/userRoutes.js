const express = require("express");
const router = express.Router();

const controller = require("../controller/userController");

router.get("/all", controller.getAll);

router.post("/create", controller.createUser);

module.exports = router;