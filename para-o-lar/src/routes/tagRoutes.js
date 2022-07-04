const express = require("express")
const router = express.Router()

const controller = require("../controllers/tagController")

router.get("/all", controller.getAll)

router.post("/create", controller.createTag)

router.delete("/delete/:id", controller.deleteTag)

module.exports = router