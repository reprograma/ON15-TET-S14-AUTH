const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const authController = require("../controllers/authController")

router.get("/all", controller.getAll);
router.post("/new", controller.createNewUser);
router.post('/login', authController.login);
router.put('/update-password', controller.updateUser);
router.delete('/delete', controller.deleteById);

module.exports = router;
