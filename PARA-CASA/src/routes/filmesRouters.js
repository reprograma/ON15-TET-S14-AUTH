const express = require("express")
const router = express.Router()

const controller = require("../controllers/filmesControllers")

router.get("/todos", controller.getAll)
router.get("/buscarId/:id", controller.buscarPorId)
router.post("/cadastrar", controller.cadastrarFilme)
router.put("/atualizar/:id", controller.atualizarFilme)
router.delete("/deletar/:id", controller.deletarFilme)


module.exports = router