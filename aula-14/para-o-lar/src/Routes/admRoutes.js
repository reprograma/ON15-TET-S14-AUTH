const express = require("express");
const router = express.Router();

const controller = require("../Controller/admController");
const autoController = require("../Controller/autoController");

router.get("/all", controller.getAll);

router.post("/create", controller.createAdm);

router.post("/login", autoController.login);

module.exports = router;