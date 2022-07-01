const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'client' },
    description: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps  : true })

module.exports = mongoose.model("order", orderSchema)

