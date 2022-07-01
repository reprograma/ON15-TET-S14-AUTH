const RestauranteModel = require("../models/RestauranteSchema")

const createNewRestaurant = async (request, response) => {
    const { nome, estrelas, sobre, endereco, telefone, especialidade, tipoDeServico,
        horarioDeFuncionamento, tempoDeEntrega, pagamento, cardapio_id, taxaDeEntrega, Ifood } = request.body

    if (nome === null || nome === undefined || nome.trim() == "") {
        throw {
            statusCode: 406,
            message: `Não foi possível cadastrar restaurante. Nome obrigatório`,
            details: `Para cadastrar restaurante, um nome deve ser inserido.`
        };
    };

    try {

        const newRestaurant = new RestauranteModel({
            nome, estrelas, sobre, endereco, telefone, especialidade, tipoDeServico,
            horarioDeFuncionamento, tempoDeEntrega, pagamento, taxaDeEntrega, Ifood, cardapio_id
        })

        const keys = Object.keys(newRestaurant)
        keys.forEach(key => {
            if (!newRestaurant[key]) {
                throw {
                    statusCode: 406,
                    message: `Não foi possível cadastrar restaurante: ${nome}. Todos os itens devem ser preenchidos.`,
                    details: `Para a criação de um novo restaurante, é preciso preencher todos os dados.`
                };
            };
        });


        const savedRestaurant = await newRestaurant.save()



        const findAll = await RestauranteModel.find().populate("cardapio_id")

        if (savedRestaurant) {
            response.status(201).json({
                "Mensagem": "Restaurante cadastrado com sucesso",
                "Novo restaurante": newRestaurant,
                "Restaurantes cadastrados": findAll.length,
                "Lista de restaurantes": findAll

            })


        }

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findAllRestaurants = async (request, response) => {
    try {
        // const findAllMenus = await MenuModel.find().populate("restaurant_id")
        const findAllRestaurants = await RestauranteModel.find().populate("cardapio_id")

        response.status(200).json({
            "Restaurantes encontrados": findAllRestaurants.length,
            "Lista de restaurantes": findAllRestaurants

        });
    } catch (error) {
        response.status(500).json({ message: error.message })
    };
};

const findById = async (request, response) => {
    const { id } = request.params
    try {

        await RestauranteModel
            .findById(id)
            .populate("cardapio_id")
            .exec((error, restaurantes) => {
                if (error) {
                    response.status(400).json({
                        message: `Id informado está fora do padrão.`,
                        details: error.message
                    });
                } else if (restaurantes == null) {
                    response.status(404).json({ message: 'Id não encontrado na base de dados' });
                } else {
                    response.status(200).json(restaurantes);
                }
            });

    } catch (error) {

        response.status(500).json({ message: error.message })

    }

}

const findByName = async (request, response) => {
    const { name } = request.query
    try {
        let restaurantFound = await RestauranteModel.find().populate("cardapio_id")

        if (name) {

            restaurantFound = await RestauranteModel.find({ nome: { $regex: name, $options: 'i' } }).populate("cardapio_id")

        }

        if (restaurantFound.length === 0) {
            throw {
                statusCode: 404,
                message: "Não encontramos resultados com essa busca.",
                details: "Em nosso banco de dados, não existem informações compatíveis com essa busca.",
                query: request.query
            }
        }

        response.status(200).json({
            "Restaurantes encontrados": restaurantFound.length,
            "Lista de restaurantes": restaurantFound

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
        const findRestaurant = await RestauranteModel.findByIdAndDelete({_id : request.params.id}).populate("cardapio_id")

        if(!findRestaurant) {
         
                throw {
                    statusCode: 404,
                    message: "Não encontramos resultados com o id pesquisado.",
                    details: "Em nosso banco de dados, não existem informações compatíveis com essa busca.",
                    query: request.params
                }
            }
        
        response.status(200).json([{
            "mensagem": "Item deletado com sucesso",
            "item deletado": findRestaurant}])
    } catch (error) {
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }

    }
}

const updateRestaurant = async (request, response) => {
    const { nome, sobre, endereco, telefone, especialidade, tipoDeServico,
        horarioDeFuncionamento, tempoDeEntrega, pagamento, cardapio_id, taxaDeEntrega, Ifood } = request.body

    try {
        const findRestaurant = await RestauranteModel.findById(request.params.id).populate("cardapio_id")

        if (!findRestaurant) {
            throw {
                statusCode: 404,
                message: "Restaurante não localizado",
                query: request.params
            }
        }

        findRestaurant.nome = nome || findRestaurant.nome
        findRestaurant.sobre = sobre || findRestaurant.sobre
        findRestaurant.endereco = endereco || findRestaurant.endereco
        findRestaurant.telefone = telefone || findRestaurant.telefone
        findRestaurant.especialidade = especialidade || findRestaurant.especialidade
        findRestaurant.tipoDeServico = tipoDeServico || findRestaurant.tipoDeServico
        findRestaurant.horarioDeFuncionamento = horarioDeFuncionamento || findRestaurant.horarioDeFuncionamento
        findRestaurant.tempoDeEntrega = tempoDeEntrega || findRestaurant.tempoDeEntrega
        findRestaurant.pagamento = pagamento || findRestaurant.pagamento
        findRestaurant.cardapio_id = cardapio_id || findRestaurant.cardapio_id
        findRestaurant.taxaDeEntrega = taxaDeEntrega || findRestaurant.taxaDeEntrega
        findRestaurant.Ifood = Ifood || findRestaurant.Ifood

        const savedRestaurant = await findRestaurant.save()

        response.status(200).json({
            "Restaurante atualizado": savedRestaurant
        })
        
    } catch (error) {
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }

    
    }
}

const evaluateRestaurant = async (request, response) => {
    const {estrelas} = request.body

    try {
        const findRestaurant = await RestauranteModel.findById(request.params.id).populate("cardapio_id")

        if (!findRestaurant) {
            throw {
                statusCode: 404,
                message: "Restaurante não localizado",
                query: request.params
            }
        }

        
        if(estrelas > 5){
            throw {
                statusCode: 406,
                message: "Não foi possível avaliar o restaurante",
                details: "Para avaliar o restaurante, escolha uma nota de 0 a 5"
            }
        }
        

        findRestaurant.estrelas = ((findRestaurant.estrelas + estrelas)/2).toFixed(2)

        const savedRestaurant = await findRestaurant.save()

        response.status(200).json({
            "Restaurante atualizado": savedRestaurant
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
    createNewRestaurant,
    findAllRestaurants,
    findById,
    findByName,
    deleteById,
    updateRestaurant,
    evaluateRestaurant
}


