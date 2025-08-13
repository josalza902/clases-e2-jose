// import express from 'express';
// const app = express();

// app.get('/', function(req, res) {
//     res.send('Hello World!');
// })

// const config = {
//     hostname : '127.0.0.1',
//     port: 5510
// }
// app.listen(config, () => {
//     console.log(`http://${config.hostname}:${config.port}`);
// })
// import express from 'express';
// import 'dotenv/config'
// const app = express();

// app.get('/', function(req, res) {
//     res.sendFile("./public/src/index.html",{root: import.meta.dirname});
// })

// app.use((req,res)=>{
//     res.status(404).sendFile("./public/src/404.html",{
//         root: import.meta.dirname
//     })
// })

// app.listen({
//     hostname:process.env.HTTP_HOSTNAME,
//     port:process.env.HTTP_PORT 
//     },() => {
//     console.log(`http://${process.env.HTTP_HOSTNAME}:${process.env.HTTP_PORT }`);
// })

import express from 'express';
import fs from 'fs'
import { readFileSync } from 'fs';
import 'dotenv/config'
const app = express();
let path = process.env.HTTP_STATIC;
let root =  import.meta.dirname
app.use (express.static(path))

app.get('/', function(req, res) {
    res.sendFile(`${path}/src/index.html`,{root});
})
app.get('/readfile',(req,res)=>{
    const leer = readFileSync('./public/views/jose.txt', 'utf-8')
    res.send(leer)
})
app.get('/api',(req,res)=>{
    res.send({name: 'Pepe'})
})

app.use((req,res)=>{
    res.status(404).sendFile(`${path}/views/404.html`,{root})
})

app.listen({ 
    hostname:process.env.HTTP_HOSTNAME,
    port:process.env.HTTP_PORT
    },() => {
    console.log(`http://${process.env.HTTP_HOSTNAME}:${process.env.HTTP_PORT }`);
})



