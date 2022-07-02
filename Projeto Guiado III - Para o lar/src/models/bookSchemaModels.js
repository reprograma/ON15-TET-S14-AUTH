const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    
    id: mongoose.Schema.Types.ObjectId,
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    releaseyear: {
        type: Number,
        required: true
    },

    publisher: {
        type: String, 
        required: true
    }


});

module.exports = mongoose.model('book', bookSchema);