const express = require("express")
const app = express()
const path = require("path")//usar esse modulo nativo do node evita conflitos entre windows e mac

app.use(express.static("public"))
//é uma boa pratica usar a pasta public

//rotas
    const router = express.Router()

    router.get("/",(req,res) => {
        res.sendFile(path.join(__dirname,"/index.html"))//pecisa da extenção   
    })

app.use("/",router)

//listener
 const port = 8082
 app.listen(port,() => {
     console.log("Servidor online!")
 })