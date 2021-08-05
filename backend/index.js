


const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const morgan=require('morgan')
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const router=require('./router')
app.use('/person',router)
const routerL=require('./routerL')
app.use('/login',routerL)

app.get('/',(req,res)=>{
    res.send('<h1 class=bg-primary>hdfsfi</h1>');
});

app.listen(2001,()=>console.log('sever connect'));

mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb://localhost:27017/person',(err)=>{
if (err){console.log('not connect')}
    console.log('connect')
})
