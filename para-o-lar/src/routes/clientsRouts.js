const express = require("express") 
const router = express.Router()
const controller = require("../controllers/clientsController")

router.post("/create", controller.createClient)
router.get("/all", controller.findAll)
router.get("/id/:id", controller.findById)
router.put("/update/:id", controller.updateClient)
router.delete("/delete/:id", controller.deleteClient)

module.exports = router