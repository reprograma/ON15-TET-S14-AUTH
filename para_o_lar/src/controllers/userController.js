const UserSchema = require("../models/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

//signup
const createUser = async (request, response) => {
    const hashedPassword = bcrypt.hashSync(request.body.password, 10)
    request.body.password = hashedPassword 
    try {
    const user = new UserSchema({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    })

    const emailExists = await UserSchema.exists({ email: request.body.email })
    if(emailExists) {
        return response.status(400).send({
          "message": "Email já cadastrado"
      })}

    if(user.name === "" || user.email === "" || user.password === "") {
        return response.status(400).send({ "message": "Preencha todos os campos" })
    }

    const savedUser = await user.save()
        response.status(201).send(savedUser)

    } catch (error) {
        response.status(500).send({ message: error.message })
  }
}

const getAll = async (request, response) => {
    try{
        const authHeader = request.get("Authorization")
        const token = authHeader.split(" ")[1]

        if(!token) {
            response.status(401).send({message: "Erro no Header"})
        }
        jwt.verify(token, SECRET, function(error) {
            if (error) {
                response.status(403).send({message: "Acesso não autorizado"})
            }
        })
        UserSchema.find(function (error, users) {
            if (error) {
                response.status.send({message: error.message})
            }
                response.status(200).send(users)
        })
 
    } catch (error) {
        response.status.send({message: error.message})
    }
}

const updateUser = async (request, response) => {
    try {
        const authHeader = request.get("Authorization")
        const token = authHeader.split(" ")[1]
        if(!token) {
            response.status(401).send({message:"Erro no Header"})
        }
        
        jwt.verify(token, SECRET, function(error) {
            if (error) {
                response.status(403).send('Não autorizado')
            }
        })

        const idRequest = request.params.id
        const userFound = await UserSchema.findById(idRequest)

        if(!userFound){
            response.status(404).send({
                statusCode: 404,
                message: "Usuário não encontrado"                
            })
        }

        userFound.name = request.body.name || userFound.name
        userFound.email = request.body.email || userFound.email
        
        
        const savedUser = await userFound.save()
        response.status(200).json({
            "O usuário foi atualizado com sucesso": savedUser
        })

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const UpdateUserPassword = async (request, response) => {
    
    try {
        const authHeader = request.get("Authorization")
        const token = authHeader.split(" ")[1]
        
        if(!token) {
            response.status(401).send({message:"Erro no Header"})
        } 
        
        jwt.verify(token, SECRET, function(erro) {
            if (erro) {
                return res.status(403).send('Não autorizado')
            }
        })
        
        const idRequest = request.params.id
        const userFound = await UserSchema.findById(idRequest)
        console.log(userFound)
        
        if(!userFound) {
            response.status(404).send({message:"Usuário não encontrado"})
        }
        
        request.body.password = hashedPassword 
        console.log(hashedPassword)

        const savedPassword = await userFound.save()
        
        response.status(200).json({
            message: "Usuário atualizado com sucesso",
            savedPassword
        })

    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

const deleteUser = async (request, response) => {
    try{
        const authHeader = request.get("Authorization")
        const token = authHeader.split(" ")[1]
        console.log(token)

        if(!token) {
            response.status(401).send({message:"Erro no Header"})
        } 

        jwt.verify(token, SECRET, function(erro) {
            if (erro) {
            return res.status(403).send('Não autorizado')
            }
        })

        const idRequest = request.params.id
        const deleteUser = await UserSchema.findByIdAndDelete(idRequest)
        response.status(200).json({
            message: "Usuário deletado com sucesso",
            id: request.params.id
        })
    
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

module.exports = {
    createUser,
    getAll,
    updateUser,
    UpdateUserPassword,
    deleteUser
}