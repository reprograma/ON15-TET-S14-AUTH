const mongoose = require("mongoose")

const MenuSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
        
    },
    // restaurant_id:[{ type: mongoose.Types.ObjectId, ref: 'Restaurant' }],
    itens: {
        type: [Object],
        required: true,
        itens: [{
        prato: String,
        Ingredientes: [String],
        preco: Number
    }]
    } 
},
{ timestamps: true 
})

const Model = mongoose.model("Menu", MenuSchema)

module.exports = Model
