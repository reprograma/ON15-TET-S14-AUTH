const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    museums: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "museum"
        }
    ]
})

module.exports = mongoose.model("tag", tagSchema)