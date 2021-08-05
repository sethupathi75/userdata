const mongoose=require('mongoose')
const login=mongoose.Schema({
    
    Email:{
        type:String,required:true
    },
    Password:{
        type:String,required:true
    }
})

module.exports=mongoose.model('login',login);