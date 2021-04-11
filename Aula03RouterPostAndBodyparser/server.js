/**
 * esse modulo permite acesar as variaveis recebidas pela requisição mais facilmente
 * ------------ npm i body-parser 
 * 
 * get: envia coisas para o cliente
 * post: recebe coisas do cliente
 */

const express = require("express")
const app = express()
const path = require("path")//usar esse modulo nativo do node evita conflitos entre windows e mac
const bodyparser = require("body-parser")

//config 
    //express
    app.use(express.static("public")) //é uma boa pratica usar a pasta public
    //bodyparser
    app.use(bodyparser())

//rotas
    const router = express.Router()

    router.get("/",(req,res) => {
        res.sendFile(path.join(__dirname,"/index.html"))//pecisa da extenção    
    })

    router.post("/",(req,res) => {
        //conteudo da requisição
        //console.log("req: ",req)// mostra tudo que vem na requisição
        //bodyparser deixa mais facil
        console.log(req.body)
        console.log(req.body.nome)
        console.log(req.body.sobrenome)

        const user = {
            nome:req.body.nome,
            sobrenome: req.body.sobrenome
        }

        res.json(user)
    })

app.use("/",router)

//listener
 const port = 8082
 app.listen(port,() => {
     console.log("Servidor online!")
 })