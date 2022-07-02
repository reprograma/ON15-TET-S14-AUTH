const mongoose = require("mongoose")

const filmeSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: [String],
        required: true
    },
    tempoExecucao: {
        type: String,
        default: true
    },
    anoLancamento: {
        type: Date,
        default: new Date()
    },
    escritor: {
        type: [String],
        required: true
    },
    diretor: {
        type: [String],
        required: true
    },
    atores: {
        type: [String],
        required: true
    },
    idioma: {
        type: [String],
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    premios: {
        type: [String],
        required: true
    },
    imagem: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("filme", filmeSchema)