const mongoose=require('mongoose')
const pschema=mongoose.Schema({
    Username:{
        type:String,required:true},

    Mobileno:{
        type:Number,required:true},
    Email:{
        type:String,required:true
    },
    Address:{
        type:String,required:true
    }
})


module.exports=mongoose.model('persons',pschema);