const express = require('express')
const router = express.Router()

// const controller = require('../controller/userController')
const authcontroller = require("../controller/authController")
const usercontroller = require("../controller/userController")


// router.get("/all", controller.findAllfilms)

// router.post("/film/create", controller.createFilm)

router.get("/all", usercontroller.getAll)
router.post("/create/user", usercontroller.createUser)
router.post("/login", authcontroller.login)
router.delete("/delete/:id", usercontroller.deleteFilm)
router.put("/update/:id", usercontroller.updateFilm) 


// router.post("/login", authcontroller.login)

// router.delete("/delete/:id", controller.deleteFilm)

// router.put("/update/:id", controller.updateFilm)

module.exports = router
