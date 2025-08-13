import  express  from "express";
import 'dotenv/config'
import userRoute from "./user.route.js";

const server = express();
server.use(express.json());

// server.get('/sumar/:n1/:n2',(req,res)=>{
//     res.send(parseInt(req.params.n1)+parseInt(req.params.n2));
// })
// server.get('/sumar/:n1/:n2',(req,res)=>{
//     res.send(parseInt(req.headers.n1)+parseInt(req.headers.n2));
// })
// server.get('/ejemplo/:nombre/campus',(req,res)=>{
//     res.send(req.params.nombre);
// })
// server.get('/ejemplo',(req,res)=>{
//     res.set('saludo','hello')
//     res.send(req.headers.nombre);
// })
// server.get('/ejemplo',(req,res)=>{
//     res.send(parseInt(req.headers.n1)+parseInt(req.headers.n2));
//     res.send(req.headers.nombre);
// })
// server.get('/adicion',(req,res)=>{
//     const datos = req.body; 
//     // res.send(JSON.stringify(datos))
//     res.send({ct:req.headers['content-type'],nombre:`${datos.nombre} ${datos.apellido} ${datos.usuario}`})
// })
server.use('/user',userRoute)
server.listen({
    port :process.env.APP_PORT,
    hostname: process.env.APP_HOSTNAME
},()=>{
    console.log(`server se corre en ${process.env.APP_HOSTNAME}:${process.env.APP_PORT}`)
});