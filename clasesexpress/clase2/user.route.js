import express from 'express';

const userRoute = express.Router();
let data = [{id:1,name:'pepe'},{id:2,name:'juan'}]


userRoute.get('/',(req,res)=>{
    res.send(JSON.stringify(data))
})

userRoute.get('/:id',(req,res)=>{
    res.send(JSON.stringify(data.filter(dat => dat.id == req.params.id)[0]))
})

userRoute.post('/',(req,res)=>{
    data.push(req.body)
    console.log(data)
    res.send(JSON.stringify('ok'))
})

userRoute.put('/:id',(req,res)=>{
    const index = data.filter(dat => dat.id == req.params.id)
    data[index]= req.body;
    res.send(JSON.stringify('ok'))
})
userRoute.delete('/:id',(req,res)=>{
    data = data.filter(dat => dat.id != req.params.id)
    
    res.send(JSON.stringify('ok'))
})

export default userRoute;