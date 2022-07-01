const FeiraSchema = require('../models/feiraSchema');
const bcrypt = require("bcrypt");


const getAll = async (req, res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1];
    console.log("Token", token)

    if(!token) {
        return res.status(401).send("Erro no header")
    }

    FeiraSchema.find(function(err, feira) {
        if (err) {
            res.status(500).send({
                message: err.message
            })
        }
        res.status(200).send(feira)
    })
};

const registerBusiness = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    req.body.password = hashedPassword;

    const emailExists = await FeiraSchema.exists({ email: req.body.email }); 

    if(emailExists) {
        res.status(401).send({
          "message": "Negócio já cadastrado"
        })
      }
         try {                
             const newBusiness = new FeiraSchema(req.body);
    
             const savedBusiness = await newBusiness.save();
                
                 res.status(201).send({
                     "message": "Negócio cadastrado com sucesso",
                     savedBusiness
                 })
             
         } catch(err) {
             console.error(err);
             res.status(500).json({
                message: e.message
             });
         };
    };



const deleteBusiness = async (req,res) => {
    try {
        const deletedBusiness = await FeiraSchema.findByIdAndDelete(req.params.id)

        res.status(200).send({
            "message": "Nota deletada com sucesso",
            deletedBusiness
        })
    } catch(err) {
        console.error(err);
    };
};

module.exports = {
    getAll,
    registerBusiness,    
    deleteBusiness
};