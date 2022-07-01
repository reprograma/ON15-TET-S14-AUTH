const express = require("express") 
const router = express.Router()
const controller = require("../controllers/ordersController")

router.post("/create", controller.createOrder)
router.get("/all", controller.getAllOrders)
router.get("/id/:id", controller.findById)
router.put("/update/:id", controller.updateOrder)
router.delete("/delete/:id", controller.deleteOrder)


module.exports = router