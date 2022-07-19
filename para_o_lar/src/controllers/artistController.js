const AlbumSchema = require("../models/albumSchema")
const ArtistSchema = require("../models/artistSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET


const createArtist = async (request, response) => {
    try {
        const authHeader = request.get("Authorization")
        const token = authHeader.split(" ")[1]
        console.log(token)
    
        if(!token) {
            response.status(403).send({message:"Erro no Header"})
        } 
    
        jwt.verify(token, SECRET, function(erro) {
            if (erro) {
              return response.status(403).send('Não autorizado')
          }
          })

        const newArtist  = new ArtistSchema ({
            artist: request.body.artist,
            birthName: request.body.birthName,
            members: request.body.members,
            birthday: request.body.birthday,
            city: request.body.city,
            genre: request.body.genre,
            bio: request.body.bio,
            albums: request.body.albums,
            alive: request.body.alive,
            image: request.body.image
        })

        const savedNewArtist = await newArtist.save()

        if(savedNewArtist) {
            response.status(201).json({
                "message": "Album criado com sucesso",
                savedNewArtist
            })
        }
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}


const getAllArtist = async (request, response) => {
    try {
        const findAllArtist = await ArtistSchema.find().populate("albums")
        response.status(200).json({
            "Artistas cadastrados": findAllArtist
        })

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const getById = async (request, response) => {
    try {
        const idRequest = request.params.id
        await ArtistSchema.findById(idRequest).populate("albums").exec((error, artist) => {
            if (error) {
              response.status(400).json({ 
                message: "Id inválido.",
                details: error.message })
            } else if (artist == null) {
              response.status(404).json({ message: "Id não encontrado na base de dados"})
            } else {
              response.status(200).json(artist)
            }
          })
        
    } catch(error) {
        response.status(500).json({ message: error.message })
    }
}

const getByName = async (request, response) => {
    const { artist } = request.query
    try {        
        let artistFound = await ArtistSchema.find().populate("albums")

        if(artist) {
            artistFound = await ArtistSchema.find({ artist: { $regex: artist, $options: 'i' }}).populate("albums")
        }

        if (artistFound.length === 0) {
            throw {
                statusCode: 404,
                message: "Não foi encontrado nenhum artista com o dado inserido"                
            }
        }

        response.status(200).json(artistFound)
        
    } catch(error) {
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }

    }
}

const getBygenre = async (request, response) => {
    const { genre } = request.query
    try {        

        if(genre) {
            genreFound = await ArtistSchema.find({ genre: { $regex: genre, $options: 'i' }}).populate("albums")
        }

        if (genreFound.length === 0) {
            throw {
                statusCode: 404,
                message: "Não foi encontrado nenhum artista com o gênero inserido"                
            }
        }

        response.status(200).json(genreFound)
        
    } catch(error) {
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }

    }
}

const updateArtist = async  (request, response) => {
    try {
        const authHeader = request.get("Authorization")
        const token = authHeader.split(" ")[1]

        if(!token) {
            response.status(403).send({message:"Erro no Header"})
        }

        jwt.verify(token, SECRET, function(error){
            if(error) {
                return response.status(403).send('Não autorizado')
            }
        })
        const idRequest = request.params.id
        const artistFound = await ArtistSchema.findById(idRequest)
        
        if(!artistFound){
            response.status(404).send({
                statusCode: 404,
                message: "Artista não encontrado"                
            })
        }
        
        artistFound.artist = request.body.artist || artistFound.artist 
        artistFound.birthName = request.body.birthName || artistFound.birthName
        artistFound.members = request.body.members || artistFound.members
        artistFound.birthday = request.body.birthday || artistFound.birthday
        artistFound.city = request.body.city || artistFound.city
        artistFound.genre = request.body.genre || artistFound.genre
        artistFound.bio = request.body.bio || artistFound.bio
        artistFound.albums = request.body.albums || artistFound.albums
        artistFound.alive = request.body.alive || artistFound.alive
        artistFound.image = request.body.image || artistFound.image


        const savedArtist = await artistFound.save()
        response.status(200).json({
            "O Artista foi atualizado com sucesso": savedArtist
        })

    } catch(error) {
        response.status(500).json({ message: error.message })
    }
}

const deleteArtist = async (request, response) => {
    try {
        const authHeader = request.get("Authorization")
        const token = authHeader.split(" ")[1]
        console.log(token)
    
        if(!token) {
            response.status(403).send({message:"Erro no Header"})
        } 
    
        jwt.verify(token, SECRET, function(erro) {
            if (erro) {
              return response.status(403).send('Não autorizado')
          }
        })

        const idRequest = request.params.id
        const deleteArtist = await ArtistSchema.findByIdAndDelete(idRequest)

        response.status(200).json({
            "O Artista foi deletado com sucesso": deleteArtist
        })

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = {
    createArtist,
    getAllArtist,
    getById,
    getByName,
    getBygenre,
    updateArtist,
    deleteArtist
}