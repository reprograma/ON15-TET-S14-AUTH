const express = require("express");

const router = express.Router();

 const controller = require("../controller/bookController"); 



router.get("/all" , controller.getAll)
router.post("/create", controller.createNewBook);
router.put("/update/:id", controller.updateBook);
router.delete("/delete/:id", controller.deleteNote)

 module.exports = router;