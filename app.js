const express = require ("express")

// importando as funcionalidades do arquivo rotasProduto.js
const rotasProduto = require("./rotas/rotasProduto")

// abaixo a variável utiliza todos os recursos que a biblioteca exxpress pode fornecer
let app = express()

// abaixo o método .get recebe o primeiro parâmetro, que é o que o usuário vai digitar e após o que será feito.
// o método res.send retorna o que veremos na página.
app.get("/", (req, res) => res.send("Esta é a home page."))

// abaixo é são as mesmas funções, mas para a página de contatos.
app.get("/contatos", (req, res)=> res.send("Esta é a página de contatos."))

// a partir desta linha uma rota foi determinada. Com a criação posterior do arquivo de rotas, ela deixa de existir aqui, pois este não é o arquivos de rotas. Ficará comentada para exemplo.
// abaixo a rota para a página de produtos
// app.get("/produtos/:id?", (req, res)=>{
//     let {id} = req.params
//     res.send ("Está é a página de produtos. ID: " +id)
// })
//                              ---------- Fim da antiga rota ----------

// abaixo o método .use determina as rotas de acesso a partir do que for digitado em /produtos, como exemplo.
app.use("/produtos", rotasProduto)


// abaixo definimos a porta pela qual o sistema é acessado.
app.listen(3000, () => console.log("Servidor rodando na porta 3000."))