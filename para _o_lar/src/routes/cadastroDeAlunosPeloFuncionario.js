const express = require("express");
const router = express.Router();

const controller = require("../controller/funcionariocadastrarClienteController");
const authController = require("../controller/authController");

router.post('/login', authController.login);

const { checkAuth } = require("../middlewares/auth");

router.get("/all", checkAuth, controller.allCustomrs); //todos clientes

router.post("/create",  checkAuth, controller.createCustomrs); //criar cliente

router.put("/update/:id", checkAuth, controller.updateCustomrs); //alterar dados do cliente

router.delete("/delete/:id", controller.deleteCustomrs); //deletar cliente


module.exports = router;