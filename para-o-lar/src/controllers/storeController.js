const StoreSchema = require("../models/storeSchema")

const findAll = async(req, res) => {
    try {
        const allStores = await StoreSchema.find()
        
        res.status(200).json(allStores)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const createStore = async(req, res) => {
    const { review, store, category, neighborhood, address, number, paymment, site } = req.body
    if(!req.body.store || !req.body.address){
        return res.status(404).send({
            "message": "Campo obrigatório",
            "satusCode": 404
        })        
    }
        const storeExists = StoreSchema.find({ store: req.body.store})
    if(storeExists) {
       return res.status(400).send({
            "message": "Estabelecimento já cadastrado"
        })
    }
    try {
        const newStore = new StoreSchema ({ review, store, category, neighborhood, address, number, paymment, site, createdAt: new Date() })        
        const savedStore = await newStore.save()        
        res.status(201).json(savedStore)        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const getById = async(req, res) => {
    try {
        await StoreSchema.findById(req.params.id).exec((err, stores) => {
            if (err) {
              return res.status(400).send({ message: `${err.message} - Id informado está fora do padrão.` });
            } else if (stores == null) {
              return res.status(404).send('Id não encontrado na base de dados');
            } else {
              return res.status(200).send(stores);
            }
          })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const findSome = async(req, res) => {
    const { store, neighborhood } = req.query
    let query = {}
    if(store) query.store = new RegExp(store, 'i')
    if(neighborhood) query.type = new RegExp(neighborhood, 'i')

    try {
        const someStore = await StoreSchema.find(query)
        res.status(200).json(someStore)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateStore = async(req, res) => {
    try {
        const findStore = await StoreSchema.findById(req.params.id)

        if(!findStore) {
            return res.status(200).send({
                "message": "Estabelecimento não encontrado",
                "statusCode": 404
            })
        }
        const updated = await StoreSchema.findOneAndReplace({ _id: req.params.id}, req.body)
        
        res.status(200).json({
            "nota atualizada": updated
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const deleteStore = async(req, res) => {
    try {
        const deleteStore = await StoreSchema.findByIdAndDelete(req.params.id)
        res.status(200).json({
            "message": "Item deletato com sucesso",
            deleteStore
        })
    } catch (error) {
        res.status(500).send({message: error.message})        
    }
}


module.exports = {
    findAll,
    createStore,
    getById,
    findSome,
    updateStore,
    deleteStore
}