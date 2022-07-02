const bookSchemaModels = require("../models/bookSchemaModels");
const bookSchema = require ("../models/bookSchemaModels")

const getAll = async (req,res) => {

    try {

    const allBooks = await bookSchema.find();
    res.status(200).send(allBooks);

    } catch (err){
        console.error(err)
    }

};

const createNewBook = async (req,res) => {

    try{
       
        const newBook = new bookSchemaModels ({
            author: req.body.author,
            title: req.body.title,
            description: req.body.description,
            releaseyear: req.body.releaseyear,
            publisher: req.body.publisher
        })
        const savedBook = await newBook.save()
        res.status(201).send({
            "message": "Novo livro cadastrado com sucesso!",
            savedBook 
        })
    } catch(err){
        console.error(err)
    }
}

const updateBook = async (req, res) => {
    try{
        const findBook = await bookSchemaModels.findById(req.params.id)
        if(!findBook){
            res.status(404).send({
                "message": "Livro não encontrado!",
                statusCode:404
            })
        }
        findBook.author = req.body.author || findBook.author
        findBook.title = req.body.author || findBook.title
        findBook.description = req.body.description || findBook.description
        findBook.releaseyear = req.body.releaseyear || findBook.releaseyear
        findBook.publisher = req.body.publisher || findBook.publisher

        const savedBook = await findBook.save()
            res.status(200).send({
                "message": "Livro atualizado com sucesso!",
                savedBook

            })
        
    
    } catch (err) {

    }
}

const deleteBook = async (req,res) => {
    try{

        const findBook = await bookSchemaModels.findById(req.params.id)

        await findBook.delete()

        res.status(200).send({
            "message": "Livro deletado com sucesso!",
            findBook
        })
    } catch(err) {
        console.error(err);
    }
}

module.exports = {
    getAll,
    createNewBook,
    updateBook,
    deleteBook

    
}