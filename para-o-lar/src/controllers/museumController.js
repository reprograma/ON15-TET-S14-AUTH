const MuseumSchema = require ("../models/museumSchema")
const TagSchema = require ("../models/tagSchema")

const getAll = async (req, res) => {
    try {
        const allMuseums = await MuseumSchema.find()
        res.status(200).send(allMuseums)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getMuseumWithTags = async (req, res) => {
    const allMuseums = await MuseumSchema.find(
        { tag: { $exists: true } }
    )
    res.status(200).send(allMuseums)
}

const getMuseumsWithFreeTag = async (req, res) => {
    const allMuseumsWithFreeTag = await MuseumSchema.find(
        { tag: { $eq: "62b677610d26c0c920abb2ec" } }
    )
    res.status(200).send(allMuseumsWithFreeTag)
}

const getMuseumsWithCloseTag = async (req, res) => {
    const allMuseumsWithCloseTag = await MuseumSchema.find(
        { tag: { $eq: "62b90ade1029dede1ea27026" } }
    )
    res.status(200).send(allMuseumsWithCloseTag)
}

const getMuseumsWithAccessibleTag = async (req, res) => {
    const allMuseumsWithAccessibleTag = await MuseumSchema.find(
        { tag: { $eq: "62b91929c107a1de5c5d0831" } }
    )
    res.status(200).send(allMuseumsWithAccessibleTag)
}

const findByNameAndNeighborhood = async (req, res) => {
    const { name, neighborhood } = req.query
    let query = {}
    
    if(name) query.name = new RegExp(name, "i")
    if(neighborhood) query.neighborhood = new RegExp(neighborhood, "i")

    try {
        const findAnyMuseum = await MuseumSchema.find(query)
        res.status(200).send(findAnyMuseum)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
const createMuseum = async (req, res) => {
    try {
        if(!req.body.name || !req.body.description || !req.body.address || !req.body.tickets){
            res.status(404).send({
                message: "Os campos obrigatórios precisam ser preenchidos.",
                "statusCode": 404
            })
        }
        const { name, description, neighborhood, address, phone, website, tickets} = req.body
        const newMuseum = await MuseumSchema.create({ name, description, neighborhood, address, phone, website, tickets })

        if(tag){
            const newTag = await new TagSchema({ name: tag, museum: newMuseum })
            await newTag.save()
            newMuseum.tag = newTag._id
        }

        const savedMuseum = await newMuseum.save()

        if(savedMuseum){
            res.status(201).send({
                message: "Museu cadastrado com sucesso",
                savedMuseum
            })
        }
    } catch (error) {
        res.status(500).send({"message": error.message})
    }
}

const updateMuseum = async (req, res) => {
    try {
        const findMuseum = await MuseumSchema.findById(req.params.id)

        if(!findMuseum){
            res.status(404).send({
                message: "Museu não encontrado no sistema",
                "statusCode": 404
            })
        }

        const updatedMuseum = await MuseumSchema.findOneAndReplace({_id: req.params.id}, req.body)
        res.status(200).send({
            messgae: "Museu atualizado com sucesso",
            updatedMuseum
        })
    } catch (error) {
        res.status(500).send({"message": error.message})
    }
}

const deleteMuseum = async (req, res) => {
    try {
        const deletedMuseum = await MuseumSchema.findByIdAndDelete(req.params.id)
        res.status(200).send({
            message: "Cadastro de museu deletado com sucesso",
            deletedMuseum
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
module.exports = {
    getAll,
    getMuseumWithTags,
    getMuseumsWithFreeTag,
    getMuseumsWithCloseTag,
    getMuseumsWithAccessibleTag,
    findByNameAndNeighborhood,
    createMuseum,
    updateMuseum,
    deleteMuseum
}