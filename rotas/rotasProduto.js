const express = require ("express")

const router = express.Router()

// abaixo estamos criando rotas para acesso às demais páginas do sistema.
router.get("/criar", (req, res)=> res.send("Criando um produto."))
router.get("/deletar", (req, res)=> res.send("Deletando um produto."))

// E para isso devemos exportar este arquivo para que ele sirva de parâmetro.
module.exports = router

// Após isso devemos importar este arquivo para o app.js (linha 4 do arquivo app.js)