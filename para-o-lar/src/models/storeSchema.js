const mongoose = require("mongoose")

const storeSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        review : {
            type: Number
        },
        store: {
            type: String, 
            required: true
        },
        category: {
            type: [String],
            
        },
        neighborhood: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        paymment: {
            type: [String],
            required: true
        },
        site: {
            type: String
        },
        createdAt: {
            type: String,
            default: new Date()
        }
    }, { timestamps  : true })

    module.exports = mongoose.model('store', storeSchema)