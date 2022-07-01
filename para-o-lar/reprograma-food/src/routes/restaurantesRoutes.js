const controller = require("../controllers/restaurantesController.js");

const express = require("express");

const router = express.Router();

const {checkAuth} = require("../middlewares/auth")

router.get("/lista", checkAuth, controller.findAllRestaurants);
router.get("/lista/:id", checkAuth, controller.findById);
router.get("/name_search", checkAuth, controller.findByName);
router.post("/new", checkAuth, controller.createNewRestaurant);
router.delete("/delete/:id", checkAuth, controller.deleteById);
router.put("/update/:id", checkAuth, controller.updateRestaurant);


router.patch("/evaluate/:id", controller.evaluateRestaurant);


module.exports = router