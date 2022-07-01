const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    client: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'client' 
    }],
    description: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true, 
        float: true },
}, { timestamps  : true })

module.exports = mongoose.model("order", orderSchema)

