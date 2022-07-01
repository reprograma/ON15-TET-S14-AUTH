
const mongoose = require('mongoose')

const cadastroAlunoSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },

    socialName: {
        type: String
        
    },

    identity: {
        type: Number,
        required: true,
        unique: true
    },

    telephone:  {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },
    
    firstConsultation : {
        type: String,
        required: true
    },


}, { timestamps : true })

const Model = mongoose.model('cadastro', cadastroAlunoSchema)
module.exports = Model

