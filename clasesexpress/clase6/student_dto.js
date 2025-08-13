export default class studentDto{
    name;
    email;
    age;

    constructor(data){
        this.name = data.name;
        this.age = data.age;
        this.email = data.email;
    }
}
import express  from "express";
import {ObjectId} from 'mongodb'
export default function Route(db){
    const route=express.Router();
route.get('{/:id}',async(req,res)=>{
    const filter ={};
    if (req.params.id){
        filter._id=ObjectId.createFromHexString(req.params.id);
    }
    const data = await db.collection('products').find(filter).toArray();
    res.send(data)
})

route.post('/',async(req,res)=>{
    const data ={...req.body,category:ObjectId.createFromHexString(req.body.category)}
    const result = await db.collection('products').insertOne(req.body);
    res.send(result)
})
route.put('/:id',async(req,res)=>{
    const data ={...req.body,category:ObjectId.createFromHexString(req.body.category)}
    const result = await db.collection('products').updateOne(
        {_id : ObjectId.createFromHexString(req.params.id)}
        ,{$set:req.body});
    res.send(result)
})
route.delete('/:id',async(req,res)=>{
    const result = await db.collection('products').deleteOne({_id : ObjectId.createFromHexString(req.params.id)})
    res.send(result)
})
route.post('/student',(req,res)=>{
    console.log(new studentDto(req.body))
    res.send(JSON.stringify (new studentDto(req.body)))
})
return route
}