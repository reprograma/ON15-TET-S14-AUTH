const UserSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");


const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};

const createUser = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword      
  
    try {
      const user = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      const emailExists = await UserSchema.exists({ email: req.body.email })
      if(emailExists) {
       return res.status(400).send({
            "message": "Email já cadastrado"
        })}
  
      if(user.name === "" || user.email === "" || user.password === "") {
        return res.status(400).send({ "message": "Preencha todos os campos" })
      }
  
      const savedUser = await user.save();
  
      res.status(201).send(savedUser);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

const updateUser = async (request, response) => {
    try {

        const findUser = await userSchema.findById(request.params.id) 

        if(!findUser){
            response.status(404).json({
                "mensagem": "id não encontrado"
            })
        }

        findUser.email = request.body.email || findUser.email
        findUser.password = request.body.password || findUser.password
        
        const saveUser = await findUser.save()
        
        response.status(200).json({
            "message": "Atualização realizada com sucesso:",
            saveUser})

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}


const deleteUser = async (request, response) => {
    try {
        const findUser = await userSchema.findByIdAndDelete(request.params.id) 

    
        response.status(200).json({
            "message": "Usuário deletado com sucesso:",
            findUser})
        
    } catch (error) {
        response.status(500).json({ message: error.message })
        
    }
}
  
module.exports = {
  getAll,
  createUser,
  updateUser,
  deleteUser
};