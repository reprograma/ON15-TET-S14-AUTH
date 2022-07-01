const clientSchema = require("../models/clientsSchema")

const createClient = async(req, res) => {
    const { name, socialName, address, number, phone, referencePoint, orders, store } = req.body
    if(!req.body.name || !req.body.address){
        return res.status(404).send({
            "message": "Campo obrigatório",
            "satusCode": 404
        })        
    }
    const clientExists = await clientSchema.findOne({ phone })
    if(clientExists){
        return res.status(404).send({
            "message": "Cliente já cadastrado",
            "satusCode": 404
        })
    }
    try {
        const newClient = new clientSchema ({ name, socialName, address, number, phone, referencePoint, orders, store, createdAt: new Date() })        
        const savedClient = await newClient.save()        
        res.status(201).json(savedClient)        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const findAll = async(req, res) => {
    try {
        const allClients = await clientSchema.find()
        res.status(200).json(allClients)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const findById = async(req, res) => {
    try {
        await clientSchema.findById(req.params.id).exec((err, stores) => {
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

/* const findByOrderId = async(req, res) => {
    try {
       const findOrder = await clientSchema.findById({orders:{_orderId: req.params.id}})
        res.status(200).json(findOrder)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
 */


module.exports = {
    createClient,
    findAll,
    findById,
    // findByOrderId
}