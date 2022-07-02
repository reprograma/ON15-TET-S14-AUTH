const express = require('express')
const router = express.Router()

const authcontroller = require("../controller/authController")
const usercontroller = require("../controller/userController")

router.get("/all", usercontroller.getAll)
router.post("/created/user", usercontroller.createdUser)
router.post("/login", authcontroller.login)
router.delete("/delete/:id", usercontroller.deleteFilm)
router.put("/update/:id", usercontroller.updateFilm)
module.exports = router
