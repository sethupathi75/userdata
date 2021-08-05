const express=require('express');
const routerL=express.Router();
const Person1=require('./schemaL');
routerL.post('/',async(req,res)=>{
    console.log(req.body.Name)
    try{
    const postPerson=await new Person1({
        
        Email : req.body.Email,
        Password :req.body.Password
    });
    const save=await postPerson.save()
    res.status(200).json(save)
    }
    catch(err){
        res.json({"err":err})
    }
})

routerL.get('/',async(req,res)=>{
    try{
        const getall=await Person1.find()
        res.status(200).json(getall)
        }
        catch(err){
            res.json({"err":err})
        }
})
//get id
routerL.get('/:email',async(req,res)=>{
    try{
        const getall=await Person1.findById(req.params.email)
        res.status(200).json(getall)
        }
        catch(err){
            res.json({"err":err})
        }
})
module.exports=routerL;