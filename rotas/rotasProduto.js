const express = require ("express")
const ProdutoController = require("../controllers/ProdutoController")
const router = express.Router()

// abaixo estamos criando rotas para acesso às demais páginas do sistema.
router.get("/criar", ProdutoController.criarProduto)
router.get("/deletar/:id", ProdutoController.deletarProduto)

// E para isso devemos exportar este arquivo para que ele sirva de parâmetro.
module.exports = router

// Após isso devemos importar este arquivo para o app.js (linha 4 do arquivo app.js)