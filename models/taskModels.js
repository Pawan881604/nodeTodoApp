const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    }   
})

const taskList = mongoose.model('todoTask',taskSchema)
module.exports= taskList