const TagSchema = require("../models/tagSchema")
const MuseumSchema = require("../models/museumSchema")

const getAll = async (req, res) => {
    try {
        const allTags = await TagSchema.find()
        res.status(200).send(allTags)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const createTag = async (req, res) => {
    try {
        const museums = req.body.museums
        const name = req.body.name
        const tag = await TagSchema.create({ name })

        if(museums){
            await Promise.all(museums.map(async museum => {
                const museumWithTag = new MuseumSchema({ ...museum, tag: tag._id})
                await museumWithTag.save()
                tag.museums.push(museumWithTag)
            }))
        }

        await tag.save()
        return res.send({ tag })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const deleteTag = async (req, res) => {
    try {
        const deletedTag = await TagSchema.findByIdAndDelete(req.params.id)
        res.status(200).send({
            message: "Cadastro de tag deletado com sucesso",
            deletedTag
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

module.exports = {
    getAll,
    createTag,
    deleteTag
}