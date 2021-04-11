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

//modo 1
router.get("/person1/",(req,res) => { // http://localhost:8082/person1?age=100&name=denis
    const name = req.param("name")
    const age = req.param("age")
    res.json({
        nome:name,
        idade:age
    })
})

//modo 2
router.get("/person2/:age/:name",(req,res) => { // http://localhost:8082/person2/100/denis
    const name = req.params.name
    const age = req.params.age
    res.json({
        nome:name,
        idade:age
    })
})

module.exports = router

