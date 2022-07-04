const mongoose = require("mongoose")

const museumSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: [String],
        required: true
    },
    website: {
        type: String
    },
    tickets: {
        type: [String],
        required: false
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag"
    },
    createdAt: {
        type: String,
        default: new Date()
    }
}, { timestamps: true })

module.exports = mongoose.model("museum", museumSchema)