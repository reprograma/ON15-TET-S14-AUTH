const mongoose = require("mongoose")

const RestauranteSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String,
        required: true
    },
    estrelas: {
        type: Number,
        required: true
    },
    sobre: {
        type: String,
        required: true
    },
    endereco: {
        type: Object,
        required: true,
        endereco: {
        rua: String,
        numero: String,
        bairro: String,
        cidade: String,
        estado: String,
        CEP: String}
    },
    telefone: {
        type: String,
        required: true
    },
    especialidade: {
        type: [String],
        required: true
    },
    tipoDeServico: {
        type: [String],
        required: true
    },
    horarioDeFuncionamento: {
        type: Object,
        required: true,
        horarioDeFuncionamento: {
        abertura: Number,
        fechamento: Number,
       }
    },
    tempoDeEntrega: {
        type: Number,
        required: true
    },
    pagamento: {
        type: [String],
        required: true
    },
    taxaDeEntrega: {
        type: Number,
        required: true
    },
    Ifood: {
        type: String,
        required: true
    },
    cardapio_id: [{ type: mongoose.Types.ObjectId, ref: 'Menu' }],
    
},
    { timestamps: true 
    
})

const Model = mongoose.model("Restaurant", RestauranteSchema )

module.exports = Model
