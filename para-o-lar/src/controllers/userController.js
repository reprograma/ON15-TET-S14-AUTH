const userSchema = require("../models/userSchema")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET= process.env.SECRET


const createUser = async (req,res)=>{
    const emailExist = await  userSchema.exists({email:req.body.email})
    const hashedpassaword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedpassaword
    if(emailExist){
        return res.status(401).send({
            message:"Email já está cadastrado"
        })
    }
    try {
        const newUser = new userSchema(req.body)
        const savedUser = await newUser.save()
        res.status(201).send({
            message:"Usuario criado com sucesso!",
            savedUser
        })
        
    } catch (error) {
        res.status(500).send(error.message)
        
    }
}

const login = async (req,res)=>{
    try {
       userSchema.findOne({email:req.body.email},(erro,user)=>{
            if(!user){
                return res.status(404).send({
                    message: "Login não autorizados email/senha incorretos"
                })
            }
            const validpassaword = bcrypt.compareSync(req.body.password,user.password)
            if(!validpassaword){
                return res.status(404).send({
                    message: "Login não autorizados email/senha incorretos"
                })
            }
            const token = jwt.sign({id:user._id},SECRET)    
            res.status(200).send({
                message:"Login Autorizado, token gerado:",
                token
            })
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {
    createUser,
    login
}