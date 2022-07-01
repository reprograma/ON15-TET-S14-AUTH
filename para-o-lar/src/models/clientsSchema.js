const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String, 
        required: true,
        
    },
    socialName: {
        type: String            
    },
    address: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    referencePoint: {
        type: String
    },
    createdAt: {
        type: String,
        default: new Date()
    }
    }, { timestamps  : true })
    
   
    module.exports = mongoose.model('client', clientSchema)