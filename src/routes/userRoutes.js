const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
<<<<<<< HEAD
const authController = require("../controllers/authController")

const {checkAuth} = require("../middlewares/auth")

router.get("/all", checkAuth, controller.getAll);
router.post("/new", controller.createNewUser);
router.post('/login', authController.login);
router.put('/update-password', controller.updateUser);
router.delete('/delete', controller.deleteById);
=======
const authController = require("../controllers/authController");

const { checkAuth } = require("../middlewares/auth");

router.get("/all", checkAuth, controller.getAll);

router.post("/create", controller.createUser);

router.post('/login', authController.login);

// router.delete("/delete/:id", checkAuth, controller.deleteUser);
>>>>>>> 3a17d9db4b2b11e889c721545fea9312b22c1e6a

module.exports = router;
