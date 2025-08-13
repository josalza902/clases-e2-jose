import express  from "express";
import {ObjectId} from 'mongodb'
export default function categoryRoute(db){
    const route=express.Router();
route.get('{/:id}',async(req,res)=>{
    const filter ={};
    if (req.params.id){
        filter._id=ObjectId.createFromHexString(req.params.id);
    }
    const data = await db.collection('categories').find(filter).toArray();
    res.send(data)
})

route.post('/',async(req,res)=>{
  
    const data = await db.collection('categories').insertOne(req.body);
    res.send(data)
})
route.put('/:id',async(req,res)=>{
    const data = await db.collection('categories').updateOne(
        {_id : ObjectId.createFromHexString(req.params.id)}
        ,{$set:req.body});
    res.send(data)
})
route.delete('/:id',async(req,res)=>{
    const result = await db.collection('categories').deleteOne({_id : ObjectId.createFromHexString(req.params.id)})
    res.send(result)
})
return route
}

