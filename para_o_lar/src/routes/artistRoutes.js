const controller = require("../controllers/artistController")
const express = require("express")
const router = express.Router()

const checkAuth  = require("../middlewares/auth")

router.post("/create", checkAuth, controller.createArtist)
router.get("/all", controller.getAllArtist)
router.get("/by_id/:id", controller.getById)
router.get("/by_name", controller.getByName)
router.get("/genre", controller.getBygenre)
router.put("/update/:id", checkAuth, controller.updateArtist)
router.delete("/delete/:id", checkAuth, controller.deleteArtist)



module.exports = router