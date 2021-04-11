const express = require("express")
const app = express()
const path = require("path")//usar esse modulo nativo do node evita conflitos entre windows e mac

//rotas
    const router = express.Router()

    router.get("/",(req,res) => {
        res.sendFile(path.join(__dirname,"/index.html"))//pecisa da extenção   
    })

    router.get("/js",(req,res) => {
        res.sendFile(path.join(__dirname,"/app.js"))//pecisa da extenção
    })

    router.get("/css",(req,res) => {
        res.sendFile(path.join(__dirname,"/style.css"))//pecisa da extenção  
    })

    app.use("/",router)

//listener
 const port = 8082
 app.listen(port,() => {
     console.log("Servidor online!")
 })