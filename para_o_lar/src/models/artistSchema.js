const mongoose = require ("mongoose")

const ArtistSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artist: String,
    birthName: String,
    members: [String],
    birthday: String,
    city: String,
    genre: [String],
    bio: String,
    albums: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "album"
        }
    ],
    alive:{
        type: Boolean,
        required: false
    },
    image: String
}, { timestamps  : true } )

module.exports = mongoose.model('artist', ArtistSchema)