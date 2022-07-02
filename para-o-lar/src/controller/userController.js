const UserSchema = require('../models/userSchema')

const bcrypt = require('bcrypt')

const jwt = require("jsonwebtoken")

const SECRET = process.env.SECRET

const createdUser = async (request, response) => {
    const hashedPassword = bcrypt.hashSync(request.body.password, 10) //criação da senha
    request.body.password = hashedPassword //senha criado sendo criptografada hasheada

    try {

     const newUser = new UserSchema(request.body) // pegar os usuários do body (Postman)

     const savedUser = await newUser.save()  // salvando o usuário no BD
        
     response.status(201).send({
         "message": "Usuário cadastrado com sucesso no banco de dados!",
         savedUser
     })
 
    } catch (error) {
      console.log(error)
      response.status(500).json({message: error.message})
    }
 }

 // getAll
 
 const getAll = async (request, response) => {
    const hashedPassword = bcrypt.hashSync(request.body.password, 10) //criação da senha
    request.body.password = hashedPassword //senha criado sendo criptografada hasheada
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1];


  if (!token) {
    return response.status(401).send("Erro no header")
  }

  jwt.verify(token, SECRET, (error) => { //autenticação de uma rota
    if(error) {
        return response.status(401).send("Não autorizado")
    }
})
    
  UserSchema.find(function (error, users) {
    if(error) {
      response.status(500).send({ message: error.message }) // resposta do token se não for válido nem chega ai o código
    }
      response.status(200).send(users)
  }) 
};

const updateFilm = async (request, response) => {
    const hashedPassword = bcrypt.hashSync(request.body.password, 10) //criação da senha
    request.body.password = hashedPassword //senha criado sendo criptografada hasheada
  
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1];
  
    if (!token) {
      return response.status(401).send("Erro no header")
    }
  
    jwt.verify(token, SECRET, (error) => { //autenticação de uma rota
      if(error) {
          return response.status(401).send("Não autorizado")
      }
  })

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
  
  //delete filme

const deleteFilm = async (request, response) => {
    const hashedPassword = bcrypt.hashSync(request.body.password, 10) //criação da senha
    request.body.password = hashedPassword //senha criado sendo criptografada hasheada
  
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1];
  
    if (!token) {
      return response.status(401).send("Erro no header")
    }
  
    jwt.verify(token, SECRET, (error) => { //autenticação de uma rota
      if(error) {
          return response.status(401).send("Não autorizado")
      }
  })
  
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
    createdUser,
    getAll,
    updateFilm,
    deleteFilm
}

  