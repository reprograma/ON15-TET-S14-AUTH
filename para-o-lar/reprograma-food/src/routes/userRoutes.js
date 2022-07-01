const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const authController = require("../controllers/authController")

const {checkAuth} = require("../middlewares/auth")

router.post("/signup", controller.signup);
router.post('/login', authController.login);
router.get("/all", checkAuth, controller.getUsers);
router.get('/user/:id', checkAuth, controller.getUserById);
router.patch('/update-password/:id', checkAuth, controller.updateUserPassword);
router.put('/update-user/:id', checkAuth, controller.updateUser);
router.delete('/delete/:id', checkAuth, controller.deleteById);

module.exports = router;

