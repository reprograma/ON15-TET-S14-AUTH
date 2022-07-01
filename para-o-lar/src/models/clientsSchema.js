const mongoose = require("mongoose")

const storeSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String, 
            required: true
        },
        socialName: {
            type: Boolean,
            default: String            
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
            required: true
        },
        referencePoint: {
            type: String
        },
        orders: {
            type: [orderSchema]
        },
        createdAt: {
            type: String,
            default: new Date()
        }
    }, { timestamps  : true })
    
    const orderSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        description: {
            type: String,
            required: true
        }
    })

    module.exports = mongoose.model('client', storeSchema)