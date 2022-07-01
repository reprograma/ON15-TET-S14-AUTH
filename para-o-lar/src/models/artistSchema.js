const mongoose = require('mongoose')

const artistSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    nome: {
        type: String,
        required: true
    },
    musica: {
        type: String,
        required: true,

    },
    categoria: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});
module.exports = mongoose.model('artist', artistSchema)