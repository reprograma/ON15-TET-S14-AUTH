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

module.exports = {
    createOrder
}