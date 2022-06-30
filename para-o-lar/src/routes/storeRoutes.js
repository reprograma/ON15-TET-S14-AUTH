const express = require("express") 
const router = express.Router()
const controller = require("../controller/storeController")

router.get("/all", controller.findAll)
router.post("/create", controller.createStore)
router.get("/find_some", controller.findSome)
router.get("/id/:id", controller.getById)
router.put("/update/:id", controller.updateStore)
router.delete("/delete/:id", controller.deleteStore)

module.exports = router