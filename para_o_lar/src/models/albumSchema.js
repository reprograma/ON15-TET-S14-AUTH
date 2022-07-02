const mongoose = require ("mongoose")

const AlbumSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artist: String,  
    albumTitle:{
        type: String,
        required: false
    },  
    released: Number,
    format: [String],
    trackList: [String],
    genre:[String],
    image: String

}, { timestamps  : true } )

module.exports = mongoose.model('album', AlbumSchema) 