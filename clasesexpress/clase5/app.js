import express  from "express";
import {MongoClient} from "mongodb"
import 'dotenv/config';
import categoryRoute from "./routes/category.route.js";
import productRoute from "./routes/product.route.js";

const app = express();
app.use(express.json())

let db = undefined;
async function databaseconection(){
    const cliente = new MongoClient(process.env.MONGO_URL)
    await cliente.connect();
    db = cliente.db('prueba');
    console.log('Database connected!');
}
await databaseconection(),
app.use('/category',categoryRoute(db))
app.use('/product',productRoute(db))
app.listen({
    port :process.env.APP_PORT,
    hostname :process.env.APP_HOSTNAME
},()=>console.log(`el server esta corriendose en${process.env.APP_PORT}:${process.env.APP_HOSTNAME}`))