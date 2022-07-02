const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post("/create", controller.createUser);
router.post("/login", authController.login);
router.get("/all", controller.getAll);
router.put("/update/:id", controller.updateUser);
router.put("/updatePassword/:id", controller.updatePassword);



module.exports = router;