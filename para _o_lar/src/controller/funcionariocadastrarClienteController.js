const cadastroClienteSchema = require("../model/cadastroClienteSchema");


const allCustomrs = async (req, res) => {
    cadastroClienteSchema.find(function (err, client) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(client)
  }) 
};

const createCustomrs = async (req, res) => {
   
    try {
      const newClient = new cadastroClienteSchema({
        name: req.body.name,
        socialName: req.body.socialName,
        identity: req.body.identity,
        telephone: req.body.telephone,
        address: req.body.address,
        firstConsultation: req.body.firstConsultation,
        createdAt: new Date()

    })
    const saveClient = await newClient.save()
    res.status(201).json({
        "message": "Cliente cadastrado com sucesso (o funcionario cadastrou):",
        saveClient})
    
} catch (error) {
    res.status(500).json({ message: error.message })   
}
}

const updateCustomrs = async (request, response) => {
    try {

        const findClient = await cadastroClienteSchema.findById(request.params.id) 

        if(!findClient){
            response.status(404).json({
                "mensagem": "id não encontrado"
            })
        }

        findClient.name = request.body.name || findClient.name
        findClient.socialname = request.body.socialname || findClient.socialname
        findClient.identity = request.body.identity || findClient.identity
        findClient.telephone = request.body.telephone || findClient.telephone
        findClient.address = request.body.address || findClient.address
        findClient.firstConsultation = request.body.firstConsultation || findClient.firstConsultation
        
        
        const saveClient = await findClient.save()
        
        response.status(200).json({
            "message": "Atualização do cliente realizada com sucesso (o funcionario atualizou):",
            saveClient})

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}


const deleteCustomrs = async (request, response) => {
    try {
        const findClient = await cadastroClienteSchema.findByIdAndDelete(request.params.id) 

    
        response.status(200).json({
            "message": "Cliente deletado com sucesso (o funcionario deletou):",
            findClient})
        
    } catch (error) {
        response.status(500).json({ message: error.message })
        
    }
}
  
module.exports = {
  allCustomrs,
  createCustomrs,
  deleteCustomrs,
  updateCustomrs
};