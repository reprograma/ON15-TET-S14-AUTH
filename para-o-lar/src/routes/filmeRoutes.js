const controller = require('../controller/filmeController')

const express = require('express')

const router = express.Router()

router.get("/all", controller.findAllfilmes)

router.post("/film/create", controller.createFilmes)

router.delete("/delete/:id", controller.deleteFilme)

router.put("/update/:id", controller.updateFilme)

module.exports = router
