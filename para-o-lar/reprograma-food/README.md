# <div align = "center"> ON15-TET-S14-AUTH </div>




<div align = "center">
    <p>
        Turma Online Todas em Tech - Back-end | Semana 14: Aplicar Autenticação // Conhecer Autorização: <b>JWT</b>.
    </p>
</div>

<br>
<div align = "center">
<img src='./assets/reprogramafood.jpg' width = 500 alt = 'logo reprogramafood'>
</div>
<br>


## PROJETO 

<div align = "justify">

Para esse projeto foi criada uma Web API com o tema: [restaurantes](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/tree/BrunaCelestino/para-o-lar/reprograma-food) encontrados na plataforma Ifood. Todos os restaurantes contidos nesse projeto, bem como suas respectivas informações, são reais e estão localizados na cidade de Jacareí - SP. Para armazenamento das informações, foi utilizado o banco de dados MongoDB.   

<br>

</div>

### OBJETIVO: 
<div align = "justify">

O objetivo dessa web API é reunir os restaurantes cadastrados na plataforma Ifood, localizados na cidade de Jacareí -SP, tornando possível para os usuários pesquisar informações sobre os restaurantes e cardápios, baseando-se em uma série de parâmetros, utilizando o método **GET**, além de possibilitar o cadastro de novos restaurantes ou cardápios, utilizando o método **POST**, remover restaurantes e cardápios com o método **DELETE**, atualizar restaurantes ou cardápios usando **PUT**, avaliar o restaurante, obtendo uma nova média de avaliação, utilizando **PATCH**. 

<br>
</div>

###  ARQUITETURA: 

<div align = "justify">

Esse projeto foi construído utilizando a arquitetura MVC, acrônimo para Model-View-Controller ou, em português, Arquitetura Modelo-Visão-Controle. MVC é um padrão de arquitetura de software, voltado para o reuso de códigos e onde a separação dos mesmos ocorre em três camadas interconectadas. A apresentação dos dados é separada dos métodos que interagem com o banco de dados.

</div>

O servidor, criado dentro da pasta [reprograma-food](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/tree/BrunaCelestino/para-o-lar/reprograma-food), conta com a seguinte estrutura:


```bash
        \--📂 para-o-lar\reprograma-food
            | 
            |    server.js
            |
            |    package-lock.json
            |    package.json
            |    README.md
            |    .env.example
            |    .gitignore
            |
            |--📂assets
            \--📂src
                    |
                    |   app.js
                    |
                    📂---controllers
                    |
                    |   authController.js
                    |   userController.js
                    |   restaurantesController.js
                    |   menuController.js
                    |
                    |
                    📂---database
                    |
                    |   
                    |   mongoConfig.js
                    |   
                    |
                     📂---middlewares
                    |
                    |   auth.js
                    |
                    |
                    📂---models
                    |
                    |   MenuSchema.js
                    |   RestauranteSchema.js
                    |   userSchema.js
                    |
                    📂---routes
                    |
                    |   menuRoutes.js
                    |   restaurantesRoutes.js 
                    |   userRoutes.js 			      

 ```

<div align = "justify">

- [server.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/server.js) - Define onde o servidor local irá ser executado;

- [app.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/app.js) - Requere as dependências necessárias para o projeto e define o padrão de cada rota;

- [controllers](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/tree/BrunaCelestino/para-o-lar/reprograma-food/src/controllers) - pasta contendo os arquivos: [restaurantesController.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/controllers/restaurantesController.js) e [menuController.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/controllers/menuController.js), que definem, em fuções, o que cada rota deve realizar. [authController.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/controllers/authController.js), que permite que o usuário faça login e [userController.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/controllers/userController.js), que possui funções de criação de usuário, e outras funções relacionadas a ele, como deletar, atualizar e encontrar. 
     
- [models](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/tree/BrunaCelestino/para-o-lar/reprograma-food/src/models)- pasta contendo os aquivos: [userSchema.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/models/userSchema.js), [RestauranteSchema.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/models/RestauranteSchema.js) e [MenuSchema.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/models/MenuSchema.js), que contêm a formatação que os usuários, restaurantes e cardápios devem seguir; 

- [routes](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/tree/BrunaCelestino/para-o-lar/reprograma-food/src/routes) - pasta contendo os arquivos: [restaurantesRoutes.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/routes/restaurantesRoutes.js), [menuRoutes.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/routes/menuRoutes.js), [userRoutes.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/routes/userRoutes.js). Esses arquivos acrescentam os complementos às rotas genéricas, fazendo com que elas se tornem completas e possam ser acessadas; 

- [database](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/tree/BrunaCelestino/para-o-lar/reprograma-food/src/database) - pasta contendo o arquivo: [mongoConfig.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/database/mongoConfig.js). Esse arquivo faz a conexão com o banco de dados; 

-[middlewares](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/tree/BrunaCelestino/para-o-lar/reprograma-food/src/middlewares), contendo o arquivo [auth.js](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/src/middlewares/auth.js), que serve como um meio de garantir que as rotas só possam ser acessadas se o usuário inserir seu token de autorização. 

- Outros arquivos e pastas - pasta [assets](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/tree/BrunaCelestino/para-o-lar/reprograma-food/assets), que contém o logo do projeto, package-lock.json e package.json. que são arquivos relacionados a dependências, .env.example, que informa quais chaves são necessárias para rodar o projeto, .gitignore, informando ao projeto quais arquivos ele não deve fazer upload e README.md, contendo a documentação do projeto.

</div>

<br>

## DESENVOLVIMENTO 
<div align = "justify">

Através de uma busca realizada na plataforma Ifood, foram selecionados 10 restaurantes, para serem inseridos na API **{reprograma}food**. Cada restaurante foi cadastrado, preenchendo informações como nome, avaliação por estrelas, descrição sobre o estabelecimento, endereço, telefone, quais as especialidades do restaurante, bem como o tipo de serviço que o mesmo oferece: delivery, presencial ou retirada.   
Além disso, o cadastro conta com o horário de funcionamento, o tempo de entrega máximo, os meios de pagamento aceitos, taxa de entrega, perfil no Ifood e um cardápio contendo o nome dos pratos, os ingredientes contidos neles e o preço de cada um. Cada restaurante e cardápio são ordenados por um **id** único.  
Por último, foi feito o cadastro dos usuários, organizado por um **id** único, contém nome, senha, que foi criptografada, após cadastro, email e o nível de autorização que cada usuário possui. O objetivo dessa semana é implementar a criptografia das senhas dos usuários e a autorização, feita através da criação de um token de acesso. 
  

<div align = "center"> Exemplo de um restaurante cadastrado:  


</div>

```json
[
    {
        "_id": "62b489f49537d21d084d5701",
        "nome": "Mineiro Delivery - Jacareí",
        "estrelas": 4.7
        ,
        "sobre": "Deliciosa comida caseira com tempero mineiro, tudo juntim em um box prático e que mantém a comida quentinha e saborosa. Nosso cardápio inclui desde o tradicional arroz com feijão acompanhados de carne suína, carne bovina, frango, peixe, camarão, até pratos como strogonoff, macarrão, porções, saudáveis, doces mineiros e bebidas geladas. Longe de ser apenas uma marmita, somos a melhor comida brasileira no box! Baião de dois, Carreteiro, Caipira, Feijoada, Churrasco, Promoções e muito mais!!!",
        "endereco": {
            "rua": "Amin Esper",
            "numero": "195",
            "bairro": "Jardim Pereira do Amparo",
            "cidade": "Jacareí",
            "estado": "São Paulo",
            "CEP": "12327-699"
        },
        "telefone": "(12)3959-2298",
        "especialidade": [
            "caseira",
            "mineira"
        ],
        "tipoDeServico": [
            "delivery"
        ],
        "horarioDeFuncionamento": {
            "abertura": 9.30,
            "fechamento": 22.45
        },
        "tempoDeEntrega": 40,
        "pagamento": [
            "dinheiro",
            "pix",
            "debito",
            "credito",
            "vale-refeicao"
        ],
        "taxaDeEntrega": 5,
        "Ifood": "https://www.ifood.com.br/delivery/jacarei-sp/mineiro-delivery---jacarei-jardim-pereira-do-amparo/669c20d6-f666-444d-be61-7b707dba184f",
        "cardapio_id": "62b489de9537d21d084d56fe",
        "createdAt": "2022-06-23T15:42:22.485Z",
            "updatedAt": "2022-06-23T23:25:14.967Z",
            "__v": 2
        
    },
]
```
</div>

<div align = "center"> Exemplo de um cardápio cadastrado:  


</div>

```json
[
    {
        {
            "_id": "62b489de9537d21d084d56fe",
            "itens": [
                {
                    "prato": "feijoada",
                    "Ingredientes": [
                        "feijão carioca preto",
                        "pedaços de pele suína",
                        "cubos de carne seca",
                        "paio",
                        "pernil suíno",
                        "bacon frito",
                        "tiras de couve",
                        "arroz",
                        "farofa"
                    ],
                    "preco": 24.99
                },
                {
                    "prato": "carne de panela",
                    "Ingredientes": [
                        "carne bovina cozida em cubos",
                        "cubos de batata cozida",
                        "cheiro verde",
                        "arroz"
                    ],
                    "preco": 28.99
                },
                {
                    "prato": "fraldinha",
                    "Ingredientes": [
                        "fraldinha selada",
                        "cebola em tiras",
                        "brócolis",
                        "arroz"
                    ],
                    "preco": 28.99
                },
                {
                    "prato": "strogonoff de carne",
                    "Ingredientes": [
                        "cortes de coxão mole flambados",
                        "molho vermelho",
                        "creme de leite",
                        "champignon",
                        "arroz",
                        "batata palha"
                    ],
                    "preco": 25.99
                },
                {
                    "prato": "galinhada",
                    "Ingredientes": [
                        "frango ao molho caipira",
                        "milho verde",
                        "cebola em cubinhos",
                        "cheiro verde",
                        "arroz"
                    ],
                    "preco": 23.99
                }
            ],
            "createdAt": "2022-06-23T15:42:22.485Z",
            "updatedAt": "2022-06-23T23:25:14.967Z",
            "__v": 2
        }
    }
]
```
</div>



<div align = "center"> Exemplo de um restaurante cadastrado, onde o schema do restaurante recebe o schema do cardápio:  


</div>

```json
[
    {
            "_id": "62b489f49537d21d084d5701",
            "nome": "Mineiro Delivery - Jacareí",
            "estrelas": 4.7,
            "sobre": "Deliciosa comida caseira com tempero mineiro, tudo juntim em um box prático e que mantém a comida quentinha e saborosa. Nosso cardápio inclui desde o tradicional arroz com feijão acompanhados de carne suína, carne bovina, frango, peixe, camarão, até pratos como strogonoff, macarrão, porções, saudáveis, doces mineiros e bebidas geladas. Longe de ser apenas uma marmita, somos a melhor comida brasileira no box! Baião de dois, Carreteiro, Caipira, Feijoada, Churrasco, Promoções e muito mais!!!",
            "endereco": {
                "rua": "Amin Esper",
                "numero": "195",
                "bairro": "Jardim Pereira do Amparo",
                "cidade": "Jacareí",
                "estado": "São Paulo",
                "CEP": "12327-699"
            },
            "telefone": "(12)3959-2298",
            "especialidade": [
                "caseira",
                "mineira"
            ],
            "tipoDeServico": [
                "delivery"
            ],
            "horarioDeFuncionamento": {
                "abertura": 9.3,
                "fechamento": 22.45
            },
            "tempoDeEntrega": 40,
            "pagamento": [
                "dinheiro",
                "pix",
                "debito",
                "credito",
                "vale-refeicao"
            ],
            "taxaDeEntrega": 5,
            "Ifood": "https://www.ifood.com.br/delivery/jacarei-sp/mineiro-delivery---jacarei-jardim-pereira-do-amparo/669c20d6-f666-444d-be61-7b707dba184f",
            "cardapio_id": [
                {
                    "_id": "62b489de9537d21d084d56fe",
                    "itens": [
                        {
                            "prato": "feijoada",
                            "Ingredientes": [
                                "feijão carioca preto",
                                "pedaços de pele suína",
                                "cubos de carne seca",
                                "paio",
                                "pernil suíno",
                                "bacon frito",
                                "tiras de couve",
                                "arroz",
                                "farofa"
                            ],
                            "preco": 24.99
                        },
                        {
                            "prato": "carne de panela",
                            "Ingredientes": [
                                "carne bovina cozida em cubos",
                                "cubos de batata cozida",
                                "cheiro verde",
                                "arroz"
                            ],
                            "preco": 28.99
                        },
                        {
                            "prato": "fraldinha",
                            "Ingredientes": [
                                "fraldinha selada",
                                "cebola em tiras",
                                "brócolis",
                                "arroz"
                            ],
                            "preco": 28.99
                        },
                        {
                            "prato": "strogonoff de carne",
                            "Ingredientes": [
                                "cortes de coxão mole flambados",
                                "molho vermelho",
                                "creme de leite",
                                "champignon",
                                "arroz",
                                "batata palha"
                            ],
                            "preco": 25.99
                        },
                        {
                            "prato": "galinhada",
                            "Ingredientes": [
                                "frango ao molho caipira",
                                "milho verde",
                                "cebola em cubinhos",
                                "cheiro verde",
                                "arroz"
                            ],
                            "preco": 23.99
                        }
                    ],
                    "createdAt": "2022-06-23T15:42:22.485Z",
                    "updatedAt": "2022-06-23T23:25:14.967Z",
                    "__v": 2
                }
            ],
            "createdAt": "2022-06-23T15:42:44.268Z",
            "updatedAt": "2022-06-23T23:48:09.037Z",
            "__v": 0
        }
]
```
</div>

<div align = "center"> Exemplo de um usuário cadastrado:  


</div>

```json
{
            "_id": "62be6abfd9d58011b67b09aa",
            "name": "Bruna Celestino",
            "email": "brunaccelestino@gmail.com",
            "password": "$2b$10$G6BTNuoBDIBTIoylzJoXkuWK2SNyc6uX8NVE5uIIJt/sFRseXScf6",
            "role": "admin",
            "createdAt": "Fri Jul 01 2022 00:31:31 GMT-0300 (Horário Padrão de Brasília)",
            "__v": 0
}
```


<div align = "justify">

Após o término da fase de pesquisa e indexação dos restaurantes, foram desenvolvidas as lógicas necessárias para o funcionamento dos métodos, contidas dentro de funções. A cada função, um tratamento de erro foi criado por método **try-catch**, e os devidos status aplicados. Dentre os casos positivos, temos o status ***200*** indicando sucesso e ***201***, indicando que um item foi criado. Dentre os erros, podemos destacar o ***404***, onde um item não pode ser encontrado, ***406***, onde o request não é aceitado e ***500***, indicando erro interno do servidor.  
Com as lógicas contruídas, a próxima etapa foi a criação das seguintes rotas:

</div>

##  ROTAS: 
## Restaurante:
####  Método GET: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `GET`   | localhost:8099/restaurantes/lista           |                            Lista de todos os restaurantes    |
|  `GET`   | localhost:8099/restaurantes/lista/:id       |                                      Busca por ID            |
|  `GET`   | localhost:8099/restaurantes/name_search?name=|                                       Busca por nome         |

<br>
</div>

####  Método PATCH: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
| `PATCH`  |  localhost:8099/restaurantes/evaluate/:id  |          Avaliar restaurante por ID                          |

<br>
</div>

####  Método PUT: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|   `PUT`  |  localhost:8099/restaurantes/update/:id     |    Atualizar restaurante por ID                |

<br>
</div>


####  Método DELETE: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
| `DELETE` |  localhost:8099/restaurantes/delete/:id     |                   Deletar restaurante por ID                 |

<br>
</div>



####  Método POST:

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  |     localhost:8099/restaurantes/new         |                    Cadastrar novo restaurante                |

<br>
</div>


## Cardápio:
####  Método GET: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `GET`   | localhost:8099/menus/lista           |                            Lista de todos os cardápios    |
|  `GET`   | localhost:8099/menus/lista/:id       |                                      Busca por ID            |
|  `GET`   | localhost:8099/menu/pratos?dish=|                                       Busca por prato         |

<br>
</div>


####  Método PUT: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|   `PUT`  |  localhost:8099/menus/update/:id     |    Atualizar cardápio por ID                |

<br>
</div>


####  Método DELETE: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
| `DELETE` |  localhost:8099/menus/delete/:id     |                   Deletar cardápio por ID                 |

<br>
</div>



####  Método POST:

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  |     localhost:8099/menus/new         |                    Cadastrar novo cardápio                |

<br>
</div>

## Usuário:
####  Método GET: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `GET`   | localhost:8099/users/all           |                            Lista de todos os usuários    |
|  `GET`   | localhost:8099/users/user/:id       |                                      Busca usuário por ID            |

<br>
</div>


####  Método PUT: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|   `PUT`  |  localhost:8099/users/update-user/:id     |    Atualizar usuário por ID                |

<br>
</div>


####  Método DELETE: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
| `DELETE` |  localhost:8099/users/delete/:id     |                   Deletar usuário por ID                 |

<br>
</div>



####  Método POST:

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  |     localhost:8099/users/signup         |                    Cadastrar novo usuário               |
|  `POST`  |     localhost:8099/users/login        |                    Fazer login              |

<br>
</div>

####  Método PATCH:

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `PATCH`  |     localhost:8099/users/update-password/:id       |                    Atualizar senha               |


<br>
</div>

###  FUNCIONAMENTO: Restaurante

<div align = "justify">

1. `GET`: localhost:8099/restaurantes/lista  
Com essa rota, é possível se ter acesso a todos os restaurantes cadastrados. 

<br>

<div align = "justify">

2. `GET`: localhost:8099/restaurantes/lista/:id  
Com essa rota, é possível se ter acesso a um restaurante, buscando-o pelo **id** inserido na própria rota. 
<br>

3. `GET`: localhost:8099/restaurantes/name_search?name=  
Com essa rota, é possível se ter acesso a restaurantes, buscando-os pelo nome. 
</div>

<div align = "center">

|Query Params|Função|
|:---  |:--- |
|`name`|buscar restaurantes por nome|
</div>

<div align = "justify">


<div align = "justify">


4. `PATCH`: localhost:8099/restaurantes/evaluate/:id               
Com essa rota, é possível avaliar o restaurante, buscando por **id** e enviando o um body request com a quantidade de estrelas que se deseja avaliar. Uma nova média será calculada, utilizando a nota anterior do restaurante e a nova avaliação:

</div>


<div align = "justify">

```json
{"estrelas": 3}            
```

</div>

<div align = "justify">

5. `PUT`: localhost:8099/restaurantes/update/:id               
Com essa rota, é possível atualizar um restaurante, buscando por **id** e enviando o um body request com as novas informações. 
</div>


<div align = "justify">

```json
{
    "nome": "Bolinhos da Bruna",
        "estrelas": 4.9,
        "sobre": "Bolos personalizados",
        "endereco": {
            "rua": "Avenida José Pereira de Andrade",
            "numero": "495",
            "bairro": "Jardim Santa Maria",
            "cidade": "Jacareí",
            "estado": "São Paulo",
            "CEP": "12328-290"
        },
        "telefone": "(12)98892-4146",
        "especialidade": [
            "bolo",
            "doce"
        ],
        "tipoDeServico": [
            "delivery"
        ],
        "horarioDeFuncionamento": {
            "abertura": 12.00,
            "fechamento": 23.30
        },
        "tempoDeEntrega": 100,
        "pagamento": [
            "pix"
        ],
        "taxaDeEntrega": 9,
        "Ifood": "https://github.com/BrunaCelestino/ON15-TET-S10-Revisao-API/tree/main/para_o_lar",
        "cardapio_id": []
}           
```

</div>

<div align = "justify">

6. `DELETE`: localhost:8099/restaurantes/delete/:id               
Com essa rota, é possível deletar um restaurante, buscando por **id**.

</div>

<div align = "justify">

7. `POST`: localhost:8099/restaurantes/new                 
Com essa rota, é possível criar um novo restaurante, através do body request, desde que todos os campos estejam preenchidos.

</div>


<div align = "justify">

```json
{"nome": "Bolinhos da Bruna",
        "estrelas": 4.9,
        "sobre": "Bolos personalizados",
        "endereco": {
            "rua": "Avenida José Pereira de Andrade",
            "numero": "495",
            "bairro": "Jardim Santa Maria",
            "cidade": "Jacareí",
            "estado": "São Paulo",
            "CEP": "12328-290"
        },
        "telefone": "(12)98892-4146",
        "especialidade": [
            "bolo",
            "doce"
        ],
        "tipoDeServico": [
            "delivery"
        ],
        "horarioDeFuncionamento": {
            "abertura": 12.00,
            "fechamento": 23.30
        },
        "tempoDeEntrega": 100,
        "pagamento": [
            "pix"
        ],
        "taxaDeEntrega": 9,
        "Ifood": "https://github.com/BrunaCelestino/ON15-TET-S10-Revisao-API/tree/main/para_o_lar",
        "cardapio_id": []
}            
```

</div>

###  FUNCIONAMENTO: Cardápio

<div align = "justify">

1. `GET`: localhost:8099/menus/lista  
Com essa rota, é possível se ter acesso a todos os cardápios cadastrados. 
<br>

<div align = "justify">

2. `GET`: localhost:8099/menus/lista/:id  
Com essa rota, é possível se ter acesso a um cardápio, buscando-o pelo **id** inserido na própria rota. 
<br>

3. `GET`: localhost:8099/menus/pratos?dish=  
Com essa rota, é possível se ter acesso a cardápios, buscando pelos pratos. 
</div>

<div align = "center">

|Query Params|Função|
|:---  |:--- |
|`dish`|buscar por nome de um prato|
</div>


<div align = "justify">

4. `PUT`: localhost:8099/menus/update/:id               
Com essa rota, é possível atualizar um cardápio, buscando por **id** e enviando o um body request com as novas informações. 
</div>


<div align = "justify">

```json
{
    "itens": [
                {
                    "prato": "feijoada",
                    "Ingredientes": [
                        "feijão carioca preto",
                        "pedaços de pele suína",
                        "cubos de carne seca",
                        "paio",
                        "pernil suíno",
                        "bacon frito",
                        "tiras de couve",
                        "arroz",
                        "farofa"
                    ],
                    "preco": 24.99
                },
                {
                    "prato": "carne de panela",
                    "Ingredientes": [
                        "carne bovina cozida em cubos",
                        "cubos de batata cozida",
                        "cheiro verde",
                        "arroz"
                    ],
                    "preco": 28.99
                },
                {
                    "prato": "fraldinha",
                    "Ingredientes": [
                        "fraldinha selada",
                        "cebola em tiras",
                        "brócolis",
                        "arroz"
                    ],
                    "preco": 28.99
                },
                {
                    "prato": "strogonoff de carne",
                    "Ingredientes": [
                        "cortes de coxão mole flambados",
                        "molho vermelho",
                        "creme de leite",
                        "champignon",
                        "arroz",
                        "batata palha"
                    ],
                    "preco": 25.99
                },
                {
                    "prato": "galinhada",
                    "Ingredientes": [
                        "frango ao molho caipira",
                        "milho verde",
                        "cebola em cubinhos",
                        "cheiro verde",
                        "arroz"
                    ],
                    "preco": 23.99
                }
            ]
}           
```

</div>

<div align = "justify">

5. `DELETE`: localhost:8099/menus/delete/:id               
Com essa rota, é possível deletar um cardápio, buscando por **id**.

</div>

<div align = "justify">

6. `POST`: localhost:8099/restaurantes/new                 
Com essa rota, é possível criar um novo cardápio, através do body request, desde que todos os campos estejam preenchidos.

</div>


<div align = "justify">

```json

{
   "itens": [
            {
                "prato": "tigela - 1 litro",
                "Ingredientes": [
                    "xarope de guaraná",
                    "polpa de açaí"
                ],
                "preco": 25.00
            },
            {
                "prato": "açaí 300 ml - leite condensado e banana",
                "Ingredientes": [
                    "xarope de guaraná",
                    "polpa de açaí",
                    "leite condensado",
                    "banana"
                ],
                "preco": 8.32
            },
            {
                "prato": "açaí 300 ml - leite condensado e granulado",
                "Ingredientes": [
                    "xarope de guaraná",
                    "polpa de açaí",
                    "leite condensado",
                    "granulado"
                ],
                "preco": 8.32
            },
            {
                "prato": "açaí 500 ml - calda de morango e leite em pó",
                "Ingredientes": [
                    "xarope de guaraná",
                    "polpa de açaí",
                    "calda de morango",
                    "leite em pó"
                ],
                "preco": 9.99
            },
            {
                "prato": "açaí 500 ml - puro",
                "Ingredientes": [
                    "xarope de guaraná",
                    "polpa de açaí"
                ],
                "preco": 12.00
            }
        ]
    }
```

</div>

###  FUNCIONAMENTO: Usuário

<div align = "justify">

1. `GET`: localhost:8099/users/all  
Com essa rota, é possível se ter acesso a todos os usuários cadastrados, onde é requerido autorização para se ter acesso. Essa autorização é passada através do header, com um token.  
<br>

</div>

<div align = "justify">

2. `GET`: localhost:8099/users/user/:id  
Com essa rota, é possível se ter acesso a um usuário, por ID, onde é requerido autorização para se ter acesso. Essa autorização é passada através do header, com um token.  
<br>

</div>


<div align = "justify">

3. `PUT`: localhost:8099/users/update-user/:id  
Com essa rota, é possível atualizar um usuário, por ID, onde é requerido autorização para se ter acesso. Essa autorização é passada através do header, com um token.  
<br>

</div>

<div align = "justify">

4. `PUT`: localhost:8099/users/delete/:id  
Com essa rota, é possível deletar um usuário, por ID, onde é requerido autorização para se ter acesso. Essa autorização é passada através do header, com um token.  
<br>

</div>

<div align = "justify">

5. `POST`: localhost:8099/users/signup 
Com essa rota, é possível criar um usuário. Ao ser criado a conta, a senha será encriptada. 
<br>

</div>

<div align = "justify">

6. `POST`: localhost:8099/users/login 
Com essa rota, é possível fazer login, utilizando e-mail e senha. Ao ser feito login, será recebido o token de autorização.
<br>

</div>

<div align = "justify">

7. `PATCH`: localhost:8099/users/update-password/:id 
Com essa rota, é possível atualizar a senha de um usuário, por ID, onde é requerido autorização para se ter acesso. Essa autorização é passada através do header, com um token. 
<br>

</div>


##  INFORMAÇÕES TÉCNICAS 
### DEPENDÊNCIAS:

<div align = "justify">

Para que fosse possível a execução desse projeto, foi necessária a utilização de algumas dependências, descritas a seguir:
</div>

<br>

###  Módulos:

<div align = "justify">

- [Express](https://www.npmjs.com/package/express) - framework para aplicativo da web do Node.js;

- [Nodemon](https://www.npmjs.com/package/nodemon) - ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor;

- [Cors](https://www.npmjs.com/package/cors) - permite que um site acesse recursos de outro site mesmo estando em domínios diferentes;

- [dotenv-safe](https://www.npmjs.com/package/dotenv-safes) - garante que todas as variáveis de ambiente necessárias sejam definidas depois de lidas no arquivo .env;

- [mongoose](https://www.npmjs.com/package/mongoose) - Mongoose é uma ferramenta de modelagem de objetos MongoDB projetada para funcionar em um ambiente assíncrono;

- [bcrypt](https://www.npmjs.com/package/bcrypt) - Bcrypt é uma biblioteca que auxilia na encriptação (hasheamento) de senhas.

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Jsonwebtoken implementa Json web tokens. 
   
 <br>

</div>

###  Arquivos: 

<div align = "justify">

- [package-lock.json](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/package-lock.json) - especifica a versão e suas dependências;


- [package.json](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/package.json) - arquivo de configuração utilizado para estipular e configurar dependências;


- [.gitignore](https://github.com/BrunaCelestino/ON15-TET-S14-AUTH/blob/BrunaCelestino/para-o-lar/reprograma-food/.gitignore) - arquivo que lista quais arquivos ou pastas o Git deve ignorar.
<br>

</div>

<br>

###  INSTALAÇÃO: 

1. Entre na pasta onde você deseja clonar o repositório. Abra o **git** nela e digite: 

    ```bash
    $ git clone https://github.com/BrunaCelestino/ON15-TET-S14-AUTH.git
     ```

2. Digite a linha abaixo para entrar na branch correta: 

    ```bash
    $ git checkout BrunaCelestino
    ```

3. Digite a linha abaixo para entrar na pasta correta: 

    ```bash
    $ cd para-o-lar/
    ```
    ```bash
    $ cd reprograma-food/
    ```
    
4. Escreva a seguinte linha para instalar as dependências utilizadas nesse projeto: 

   ```bash
    $ npm install
    ```
5. Inicie o servidor, utilizando a frase: 

   ```bash
    $ npm start
    ```   

<br>

<div align = "justify">

###  TESTE: 

- Importe a coleção para teste deste servidor clicando [aqui](https://www.getpostman.com/collections/8bf6ca3490ea774a08db)!

- Copie o link acima e, no Postman, clique em **Import** -> **Link** (cole o link) -> **Continue** -> **Import**.

<br>

- Ou forke diretamente para o seu Postman clicando: <br> [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/20977023-ad9e3e45-03b8-4b01-a72c-5c4586fb5b5a?action=collection%2Ffork&collection-url=entityId%3D20977023-ad9e3e45-03b8-4b01-a72c-5c4586fb5b5a%26entityType%3Dcollection%26workspaceId%3D51132679-d0d9-4dec-aba4-1ccdfced55c7)


</div>
