const express = require("express")
const path = require("path")//usar esse modulo nativo do node evita conflitos entre windows e mac

const router = express.Router()

router.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"../views/index.html"))//pecisa da extenção    
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

module.exports = router

