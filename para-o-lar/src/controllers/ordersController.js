const clientSchema = require("../models/clientsSchema")
const orderSchema = require("../models/ordersSchema")


const createOrder = async(req, res) => {
    try {
        const { client, description, price } = req.body
        const orderExists = await orderSchema.findOne({ client })
        if(orderExists){
            return res.status(404).send({
                "message": "Pedido já cadastrado",
                "satusCode": 404
            })
        }
        const newOrder = new orderSchema ({ client, description, price, createdAt: new Date() })        
        const savedOrder = await newOrder.save()        
        res.status(201).json(savedOrder)        
    } catch (error) {
        
    }
}

const getAllOrders = async(req, res) => {
    try {
        const allOrders = await orderSchema.find().populate('client')
        res.status(200).json(allOrders)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const findById = async(req, res) => {
    try {
        await orderSchema.findById(req.params.id).populate('client').exec((err, stores) => {
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

const updateOrder = async(req, res) => {
    try {
        const { client, description, price } = req.body
        const updatedOrder = await orderSchema.findByIdAndUpdate(req.params.id, { client, description, price, updatedAt: new Date().toLocaleDateString() }, { new: true })
        res.status(200).json(updatedOrder)
    } catch (error) {
        console.error(error)
    }
}

const deleteOrder = async(req, res) => {
    try {
        const deletedOrder = await orderSchema.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedOrder)
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    createOrder,
    getAllOrders,
    findById,
    updateOrder,
    deleteOrder
}