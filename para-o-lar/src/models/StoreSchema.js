const mongoose = require("mongoose")

const storeSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,

        user: {
            type: String,
            required: true
        },
        
        email: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: false

        },

        storeName: {
            type: [String],
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
        
        district: {
            type: [String],
            required: true
        },
        
        City: {
            type: [String],
            required: true
        },
        
        telephone: {
            type: Number,
            required: true
        },

        payment:{
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
    });

    module.exports = mongoose.model('loja', storeSchema)