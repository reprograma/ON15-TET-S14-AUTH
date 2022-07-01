const postSchema = require('../models/postSchema')
const userSchema = require('../models/userSchema')


const createPost = async (req, res) => {
    try {
        const newPost = new postSchema({
            id_user: res.locals.id,
            description: req.body.description
        })

        const savedPost = await newPost.save()
        res.status(201).send({
            message: "Publicação criada com sucesso",
            savedPost
        })

    } catch (error) {
        res.status(500).send(error.message)
    }
}


const getPostUser = async (req, res) => {
    try {
        const findPostUser = await postSchema.find({
            id_user: res.locals.id
        })
        if (findPostUser.length == 0) {
            return res.status(401).send(`${userAuth.name},não existe nenhuma publicação criada por você`)
        }
        res.status(200).send({
            message: "Seus post",
            findPostUser
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}



const getAllPost = async (req, res) => {
    try {
        const findPost = await postSchema.find().populate({path:'id_user',select:'name'})
        if (findPost.length == 0) {
            return res.status(404).send("Não existe nenhuma publicação criada")
        }
        res.status(200).send(findPost)

    } catch (error) {
        res.status(500).send(error.message)
    }
}


const updatePost = async(req,res)=>{
    const findPost = await postSchema.findOne({_id:req.params.id})
    if(findPost.id_user != res.locals.id){
        return res.status(404).send("Não existe nenhuma publicação feita por você com esse id")
    }
    if(findPost.length == 0){
        return res.status(404).send("Não existe nenhuma publicação com esse id")
    }
    try {
        findPost.description = req.body.description || findPost.description
        const savedUpdate = await findPost.save()
        res.status(200).send({message:"Publicação alterada:",savedUpdate})
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deletePost = async(req,res)=>{
    const findPost = await postSchema.findOne({_id:req.params.id})
    if(findPost.id_user != res.locals.id){
        return res.status(404).send("Não existe nenhuma publicação feita por você com esse id")
    }
    if(findPost.length == 0){
        return res.status(404).send("Não existe nenhuma publicação com esse id")
    }
    try {
       const postdelete = await findPost.delete()
       res.status(200).send({message:"Publicação excluida com sucesso:",postdelete})

    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports={ 
    createPost,
    getPostUser,
    getAllPost,
    updatePost,
    deletePost
}