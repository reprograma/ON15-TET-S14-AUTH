const admSchema = require("../Model/admSchema");
const bcrypt = require('bcrypt');

const getAll = async (request, response) => {
  admSchema.find(function (err, adm) {
    if(err) {
      response.status(500).send({ message: err.message })
    }
      response.status(200).send(adm)
  }) 
};

const createAdm = async (request, response) => {
       try {
        const newAdm = new admSchema({
            name: request.body.name, 
            email: request.body.email, 
             password: request.body.password
          });
    
       const savedAdm = await newAdm.save();
    
           response.status(201).send({
             "message": "Administrador criado com sucesso",
            savedAdm
          });
    
       } catch(e) {
         console.error(e);
       };
     };

     
     const otherAdm = async (req, res) => {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        req.body.password = hashedPassword
    
        const newAdm = new admSchema(req.body)
    
        try {
          const savedAdm = await newAdm.save()
    
            res.status(200).json({
                message: " Adm adicionado com sucesso!",
                savedAdm
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
     


    

module.exports = {
    getAll,
    createAdm,
    otherAdm
  };