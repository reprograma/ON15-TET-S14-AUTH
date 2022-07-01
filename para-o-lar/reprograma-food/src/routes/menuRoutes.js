const controller = require("../controllers/menuController.js");

const express = require("express");

const router = express.Router();

const {checkAuth} = require("../middlewares/auth")

router.post("/new", checkAuth, controller.createNewMenu);
router.get("/lista", checkAuth, controller.findAllMenus);
router.get("/lista/:id", checkAuth, controller.findById);
router.get("/pratos", checkAuth, controller.findByDish);
router.delete("/delete/:id", checkAuth, controller.deleteById);
router.put("/update/:id", checkAuth, controller.updateMenu);



module.exports = router