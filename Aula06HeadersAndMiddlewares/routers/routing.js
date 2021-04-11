const express = require("express")
const path = require("path")//usar esse modulo nativo do node evita conflitos entre windows e mac

const router = express.Router()

router.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"../views/index.html"))//pecisa da extenção    
})

const validate1 = (req,res,next) => {
    const access = req.headers["x-client"]
    if(access === "student2"){
        next()
    }
    else{
        console.log("aqui")
        res.send("You don't have access to it!")//essa resposta é enviada para o ajax, nao diretamente para o cliente mais  
    }
}

router.post("/", validate1 ,(req,res) => {
    console.log(req.body)
    console.log(req.body.nome)
    console.log(req.body.sobrenome)

    console.log(req.headers)
    console.log(req.headers["x-client"])
    console.log(req.headers["x-class"])

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

const validate2 = (req,res,next) => {
    const access = false
    if(access){
        next()
    }
    else{
        res.send("You don't have access to it!")  
    }
}

router.get("/travel",validate2,(req,res) => {
    res.send("Página travel!")   
})

module.exports = router

