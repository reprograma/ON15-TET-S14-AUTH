const Store = require('../models/StoreSchema')
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {

  Store.find(function (err, stores) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(stores)
  }) 
};

const createStoreUser = async (req, res) => {
const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  
  req.body.password = hashedPassword;

  const emailExists = await Store.exists({ email: req.body.email });  

  if(emailExists) {
    res.status(401).send({
      "message": "Email já cadastrado no nosso sistema"
    })
  }

  try {

    const newStoreUser = new Store(req.body);

    const savedStoreUser = await newStoreUser.save();

    res.status(201).send({
      "message": "Usuário da loja criado com sucesso",
      savedStoreUser
    });

  } catch(err) {
    console.error(err);
    return res.status(500).json({
      message: e.message
  });
  };
};


const updateStore = async (req, res) => {

    try {
        
        const findStore = await Store.findById(req.params.id)
        if(!findStore){
            res.status(404).send({
                "message": "Loja não encontrada",
                "statusCode": 404
            })
        }

        findStore.storeName = req.body.storeName || findStore.storeName
        findStore.address = req.body.address || findStore.address

        
        const savedStore = await findStore.save()

    
        res.status(200).send({
            "message": "Loja atualizada com sucesso",
            savedStore
        })

    } catch(err) {
        console.error(err)
    }
   
};

const deleteStoreUser = async (req, res) => {

    try {

        const deletedStore = await Store.findByIdAndDelete(req.params.id)

        res.status(200).send({
            "message": "Usário da Loja deletado com sucesso",
            deletedStore
        })
    } catch(err) {
        console.error(err);
    };
};

module.exports = {
    getAll,
    createStoreUser,
    updateStore,
    deleteStoreUser
};
