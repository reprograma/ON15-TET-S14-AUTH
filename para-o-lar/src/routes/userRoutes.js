const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const authController = require("../controllers/authController");
const {checkAuth} = require("../middleware/auth");

router.get("/all", controller.getAll);
router.post("/create", controller.createUser);
router.post("/login", authController.login);
router.put("/update/:id", checkAuth, controller.updateUser);
router.put("/updatePassword/:id", checkAuth, controller.updatePassword);
router.delete("/delete/:id", checkAuth, controller.deleteUser);



module.exports = router;