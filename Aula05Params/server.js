const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const router = require("./routers/routing")

//config 
    //express
    app.use(express.static("public")) //é uma boa pratica usar a pasta public
    //bodyparser
    app.use(bodyparser())

//rotas
    app.use("/",router)

//listener
 const port = 8082
 app.listen(port,() => {
     console.log("Servidor online!")
 })