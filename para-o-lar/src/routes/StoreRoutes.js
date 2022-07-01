const express = require("express");
const router = express.Router();

const controller = require("../controllers/StoreController");
const authController = require("../controllers/authController");
const { checkAuth } = require("../middlewares/auth");

router.get("/all", checkAuth, controller.getAll);

router.post("/create", controller.createStoreUser);

router.post('/login', authController.login);

router.put("/update/:id", checkAuth, controller.updateStore);

router.delete("/delete/:id", checkAuth, controller.deleteStoreUser)

module.exports = router;