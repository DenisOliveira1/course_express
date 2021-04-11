/**
 * servidor:
 * -------------- npm init -y
 * -------------- npm i express (não precisa digitar install igual todo mundo digita)
 * 
 * atualizar automaticamente:
 * -------------- npm i -g nodemon
 * 
 * res.redirect - manda para alguma rota
 * res.render - manda para algum arquivo
 * res.send - manda uma string
 * res.json- mana um json
 */

 const express = require("express")
 const app = express()

//rotas modo 1
    app.get("/",(req,res) => {
        //manda resposta para o servidor
        res.json({
            msg:"Minha homepage",
            author:"Denis"
            });      
    })

    app.get("/denis",(req,res) => {
        //manda resposta para o servidor
        res.json({
            msg:"Meu perfil",
            author:"Denis"
        });      
    })

    app.get("/express",(req,res) => {
        //manda resposta para o servidor
        res.json({
            msg:"Page express",
            author:"Denis"
        });      
    })

    app.get("/modo1",(req, res) => {
        res.send("Modo 1 de escrever rotas") 
    })

//rotas modo 2
    const router = express.Router()
    app.use("/",router)

    router.get("/modo2",(req, res) => {
        res.send("Modo 2 de escrever rotas") 
    })

//rota pega tudo
    //o express se a rota acessada pelo usuario na ordem em que elas foram definidas ,
    //se olhar todas e não achar ele cai nessa ultima pela ordem, e essa aceita qualquer req
    app.get("*", (req,res) => {
        res.send("Page not found")
    })



//listener
 const port = 8082
 app.listen(port,() => {
     console.log("Servidor online!")
 })