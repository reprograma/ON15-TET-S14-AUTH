const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,

    id_user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    
    description:{
        type:String
    },
    createdate:{
        type: Date,
        default: new Date()
    }
    
})

module.exports = mongoose.model('post',postSchema)