const express = require("express")
const router = express.Router()

const controller = require("../controllers/museumController")
const { checkAuth } = require("../middlewares/auth")

router.get("/all", controller.getAll)
router.get("/with-tags", checkAuth, controller.getMuseumWithTags)
router.get("/with-free-tags", checkAuth, controller.getMuseumsWithFreeTag)
router.get("/with-close-tags", checkAuth, controller.getMuseumsWithCloseTag)
router.get("/with-accessible-tags", checkAuth, controller.getMuseumsWithAccessibleTag)
router.get("/search", controller.findByNameAndNeighborhood)

router.post("/create", checkAuth, controller.createMuseum)

router.put("/update/:id", checkAuth, controller.createMuseum)

router.delete("/delete/:id", checkAuth, controller.deleteMuseum)

module.exports = router