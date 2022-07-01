const MenuModel = require("../models/MenuSchema")

const createNewMenu = async (request, response) => {
    const {  itens, prato, Ingredientes, preco, menu} = request.body

    try {

        const newMenu = new MenuModel({
           itens, prato, Ingredientes, preco, menu
        })

        const keys = Object.keys(newMenu)
        keys.forEach(key => {
            if (!newMenu[key]) {
                throw {
                    statusCode: 406,
                    message: `Não foi possível cadastrar cardápio. Todos os itens devem ser preenchidos.`,
                    details: `Para a criação de um novo cardápio, é preciso preencher todos os dados.`
                };
            };
        });


        const savedMenu = await newMenu.save()



        const findAll = await MenuModel.find()

        if (savedMenu) {
            response.status(201).json({
                "Mensagem": "Cardápio cadastrado com sucesso",
                "Novo cardápio": newMenu,
                "Cardápios cadastrados": findAll.length,
                "Lista de cardápios": findAll

            })


        }

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}


const findAllMenus = async (request, response) => {
    try {
        const findAllMenus = await MenuModel.find()

        response.status(200).json({
            "Cardápios encontrados": findAllMenus.length,
            "Lista de cardápios": findAllMenus

        });
    } catch(error) {
        response.status(500).json({ message: error.message })
    };
};

const findById = async (request, response) => {
    const {id} = request.params
    try{
    
        await MenuModel
            .findById(id)
            .exec((error, cardapios) => {
                if (error) {
                    response.status(400).json({
                        message: `Id informado está fora do padrão.`,
                        details: error.message
                    });
                } else if (cardapios == null) {
                    response.status(404).json({ message: 'Id não encontrado na base de dados' });
                } else {
                    response.status(200).json(cardapios);
                }
            });

    } catch(error){

        response.status(500).json({ message: error.message })

    }

}

const findByDish = async (request, response) => {

    const { dish } = request.query
    try {
        let menuFound = await MenuModel.find()

        if (dish) {

            menuFound = await MenuModel.find({"itens.prato": { $regex: dish, $options: 'i' }})
            
        }

        if (menuFound.length === 0) {
            throw {
                statusCode: 404,
                message: "Não encontramos resultados com essa busca.",
                details: "Em nosso banco de dados, não existem informações compatíveis com essa busca.",
                query: request.query
            }
        }

        response.status(200).json({
            "Restaurantes encontrados": menuFound.length,
            "Lista de restaurantes": menuFound

        })

    } catch (error) {
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }

    }

}

const deleteById = async (request, response) => {
    try {
        const findMenu = await MenuModel.findByIdAndDelete({_id : request.params.id})

        if(!findMenu) {
         
                throw {
                    statusCode: 404,
                    message: "Não encontramos resultados com o id pesquisado.",
                    details: "Em nosso banco de dados, não existem informações compatíveis com essa busca.",
                    query: request.params
                }
            }
        
        response.status(200).json([{
            "mensagem": "Item deletado com sucesso",
            "item deletado": findMenu}])
    } catch (error) {
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }

    }
}

const updateMenu = async (request, response) => {
    const { itens } = request.body

    try {
        const findMenu = await MenuModel.findById(request.params.id)

        if (!findMenu) {
            throw {
                statusCode: 404,
                message: "Cardápio não localizado",
                query: request.params
            }
        }

        findMenu.itens = itens || findMenu.itens
        
        const savedMenu = await findMenu.save()

        response.status(200).json({
            "Cardápio atualizado": savedMenu
        })
        
    } catch (error) {
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }

    
    }
}

module.exports = {
    createNewMenu,
    findAllMenus,
    findById,
    findByDish,
    deleteById,
    updateMenu
 
}