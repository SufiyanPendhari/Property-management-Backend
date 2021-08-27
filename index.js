const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Schema = require('./schema')
// Connect to Database
mongoose.connect('mongodb+srv://pendharisufiyan:uRH4v7rhjgf2Z6-@cluster0.u6mw7.mongodb.net/Data?retryWrites=true&w=majority')
.then(console.log('Database Connected'))

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// To get Data
app.get('/',(req,res)=>{
    Schema.find()
    .then(data=>res.json(data))
    
})
// Create Data 
app.post('/',(req,res)=>{
    console.log(req.body);
    Schema(req.body).save()
  
})
// Delete Data 
app.delete('/:id',async(req,res)=>{
    await  Schema.findByIdAndDelete(req.params.id);
    res.json({deleted:"delete"})
})
// Listening at port 4000
app.listen(4000,()=>console.log('Server Running'))