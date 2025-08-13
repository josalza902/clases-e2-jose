import express  from "express";
import {MongoClient} from "mongodb"
import 'dotenv/config';
const app = express();
app.use(express.json())
let db = undefined;
let intentos = 2
let numero = 0
app.get("/startgame",(req,res)=>{
     numero = Math.round(Math.random()*10);
    res.send(numero)
})
app.get("/try/:id",(req,res)=>{
    console.log(numero);
    let numeroa = req.body
    let a = ""
    if(numeroa === numero){
        a = console.log("bien hecho adivinado")
    }else if(intentos === 2){
        intentos =-1;
        a =console.log("buen intento")
    }else{
        intentos =-1;
        a =console.log("ya no te queda ningun intento")
    }
    res.send(a)
})

app.listen({
    port :process.env.APP_PORT,
    hostname :process.env.APP_HOSTNAME
},()=>console.log(`el server esta corriendose en${process.env.APP_PORT}:${process.env.APP_HOSTNAME}`))