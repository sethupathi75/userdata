const express=require('express');
const router=express.Router();
const Person=require('./schema');
router.post('/',async(req,res)=>{
    console.log(req.body.Name)
    try{
    const postPerson=await new Person({
        Username : req.body.Username,
        Mobileno : req.body.Mobileno,
        Email : req.body.Email,
        Address :req.body.Address
    });
    const save=await postPerson.save()
    res.status(200).json(save)
    }
    catch(err){
        res.json({"err":err})
    }
})
//get
router.get('/',async(req,res)=>{
    try{
        const getall=await Person.find()
        res.status(200).json(getall)
        }
        catch(err){
            res.json({"err":err})
        }
})
//get id
router.get('/:id',async(req,res)=>{
    try{
        const getall=await Person.findById(req.params.id)
        res.status(200).json(getall)
        }
        catch(err){
            res.json({"err":err})
        }
})
//update
router.put('/update/:id',async(req,res)=>{
    console.log(req.params.id)
    try{
        const getall=await Person.updateOne({_id:req.params.id},{$set:{Name:req.body.Name,Age:req.body.Age}})
        res.status(200).json(getall)
        }
    catch(err){
        res.json({"err":err})
        }
})

//delete

router.delete('/:id',async(req,res)=>{
    console.log(req.params.id)
    try{
        const getall=await Person.findByIdAndRemove(req.params.id)
        res.status(200).json(getall)
        }
    catch(err){
        res.json({"err":err})
        }
})
module.exports=router;