const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseYear: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});

module.exports = mongoose.model('film', filmSchema);