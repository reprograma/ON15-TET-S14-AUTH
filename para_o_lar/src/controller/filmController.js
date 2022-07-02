const FilmSchema = require('../models/filmSchema')

const findAllfilms = async (request, response) => {
    try {

     const allFilms = await FilmSchema.find() // find em todos os filmes
        
     response.status(200).json(allFilms)
 
    } catch (error) {
      response.status(500).json({ message: error.message})
    }
 }

const createFilm = async (request, response) => {
      

    try {
        if(!request.body.title || !request.body.description) {
            response.status(404).send({
               "message": "Favor preencher os campos obrigatórios",
               "statusCode": 404
            })
       }


        const newFilm = new FilmSchema({
            
            title: request.body.title,
            description: request.body.description,
            genre: request.body.genre,
            releaseYear: request.body.releaseYear,
            country:request.body.country,
            language: request.body.language,
            actors: request.body.actors,
            director: request.body.director,
            createdAt: new Date() 
          
        })

        const savedFilm = await newFilm.save()
        
       
        response.status(201).json({
            message: "O filme foi adicionado com sucesso no banco de dados!",
            savedFilm        
        })

    } catch (error) {
        response.status(500).json({ message: error.message})
        }
}


const updateFilm = async (request, response) => {
    try {
      
        const findFilm = await FilmSchema.findById(request.params.id)

        if(!findFilm){
            res.status(404).send({
                "message": "Filme não encontrado no banco de dados :( ",
                "statusCode": 404
            })
        }

       
            findFilm.title = request.body.title || findFilm.title
            findFilm.description = request.body.description || findFilm.description
            findFilm.genre = request.body.genre || findFilm.genre
            findFilm.releaseYear = request.body.releaseYear || findFilm.releaseYear
            findFilm.country = request.body.country|| findFilm.country
            findFilm.language =  request.body.language || findFilm.language
            findFilm.actors = request.body.actors || findFilm.actors
            findFilm.director = request.body.director || findFilm.director

     
        const savedFilm = await findFilm.save()
     
        response.status(200).send({
            "message": "O filme foi atualizado com sucesso no banco de dados",
            savedFilm
        })

    } catch(err) {
        console.error(err)
    }
    
}


const deleteFilm = async (request, response) => {
    try {
       
        const findFilm = await FilmSchema.findById(request.params.id)

      
        const deletedFilm = await findFilm.remove()
       
        response.status(200).send({
            "message": "O Filme foi deletado com sucesso do banco de dados :) ",
            findFilm
        })

    } catch(err) {
        console.error(err)
    }
    
}

 module.exports = {
    findAllfilms,
    createFilm,
    updateFilm,
    deleteFilm    
}
