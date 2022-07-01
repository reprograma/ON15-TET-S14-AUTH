const express = require("express") 
const router = express.Router()
const controller = require("../controllers/ordersController")

router.post("/create", controller.createOrder)


module.exports = router