import express  from "express";
import {MongoClient} from "mongodb"
import 'dotenv/config';
import studentDto from "./student_dto.js";

const app = express()
app.use(express.json())

app.use('/student',studentRouter)

app.listen({
    port :process.env.APP_PORT,
    hostname :process.env.APP_HOSTNAME
},()=>console.log(`el server esta corriendose en${process.env.APP_PORT}:${process.env.APP_HOSTNAME}`))