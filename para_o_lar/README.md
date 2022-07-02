# <div align = "center"> ON15-TET-S12-BD </div>

<div align = "center">
    
Turma Online Todas em Tech - Back-end | Semana 14: **Aplicar Autenticação // Conhecer Autorização: JWT - CRUD com MongoDB**.


</div>


<br>
<div align = "center">
<img src='./assets/Baiao-Logo.png' width = 700 alt = 'logo herstory'>
</div>
<br>

<div align = "center">

# Baião de Dois - Discography

</div>

<div align = "justify">

A web API **Baião de Dois - Discography**, é uma aplicação de dados de artistas pernambucanos, nela é possível acessar informações detalhadas sobre os artistas, seus álbuns e músicas.   

O nome "Baião de dois" vem de um prato tipico da região Nordeste e Norte do Brasil. O termo baião, que deu origem ao nome do prato, e a um dos mais famosos ritmos nordestino, provém de uma dança típica do nordeste, por sua vez derivada de uma forma de lundu, chamada "baiano". A web API Baião de dois - Discography é, sobretudo, uma homenagem aos artistas pernambucanos e seu legado musical.

<br>

## 📁ARQUITETURA DO PROJETO
<div align = "justify">



<br>

```
 📁 para_o_lar
   |
   |-  📁 assets
   |
   |-  📁 src
   |    |
        |- 📁 📄 app.js
   |    |- 📁 config
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 albumController.js
   |         |- 📄 artistController.js
   |         |- 📄 authController.js
   |         |- 📄 userController.js
   |
   |    |- 📁 middlewares
   |         |- 📄 auth.js
   |
   |    |- 📁 models
   |         |- 📄 albumSchema.js
   |         |- 📄 artistSchema.js
   |         |- 📄 userSchema.js
   |
   |    |- 📁 routes
   |         |- 📄 albumRoutes.js 
   |         |- 📄 artistRoutes.js 
   |         |- 📄 userRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock
   |- 📄 package
   |- 📄 README.md
   |- 📄 server.js

```
<br>

## DESENVOLVIMENTO 
<div align = "justify">

O primeiro passo para a realização do projeto foi a criação do banco de dados, no MongoDB Atlas, contendo as informações de `cadastro` de cada `artista` e os `álbuns` que fazem parte da discografia de cada artista. Foram indexados artistas de todo o território pernambucano.  Cada cadastro conta com um **id** numérico único, assim como informações específicas relacionadas a cada artista como sua **nome artistico**, **membros (para o caso de bandas)**, **gênero**, etc.
  
<br>

<div align = "center"> Exemplo de artista cadastrado:
</div>

```json

{
            "_id": "62b6409b0726016f8b86c755",
            "artist": "Ave Sangria",
            "members": [
                "Marco Polo (vocal",
                "Ivinho (guitarra solo)",
                "Paulo Rafael (guitarra base)",
                "Almir de Oliveira (baixo)",
                "Juliano Noya (percussão)",
                "Israel Semente (bateria)"
            ],
            "city": "Recife",
            "genre": [
                "Rock psicodélico"
            ],
            "bio": "teste teste",
            "albums": [
                {
                    "_id": "62b53dd8fced28e93d4a6e82",
                    "artist": "Ave Sangria",
                    "albumTitle": "Ave Sangria",
                    "released": 1974,
                    "format": [
                        "CD",
                        "Vinil",
                        "Digital"
                    ],
                    "trackList": [
                        "Dois Navegantes - (4:13)",
                        "Lá Fora - (2:41)",
                        "Três Margaridas - (2:48)",
                        "O Pirata- (2:55)",
                        "Momento Na Praça - (4:13)",
                        "Cidade Grande - (4:29)",
                        "Seu Waldir - (2:15)",
                        "Hei! Man - (2:55)",
                        "Por Que? - (4:33)",
                        "Corpo Em Chamas - (3:03)",
                        "Geórgia, a Carniceira - (2:42)",
                        "Sob O Sol De Satã - (2:26)"
                    ],
                    "genre": [
                        "Psychedelic",
                        "Rock",
                        "Folk Rock"
                    ],
                    "image": "https://immub-space.nyc3.digitaloceanspaces.com/capas/7592/thumbnails/m_7592ca.jpg",
                    "createdAt": "2022-06-24T04:30:16.256Z",
                    "updatedAt": "2022-06-24T04:30:16.256Z",
                    "__v": 0
                }
            ],
            "alive": true,
            "image": "https://revistacontinente.com.br/image/view/news/image/1684/mobile",
            "createdAt": "2022-06-24T22:54:19.285Z",
            "updatedAt": "2022-06-24T22:54:19.285Z",
            "__v": 0
}   
```

<div align = "center"> Exemplo de álbum cadastrado:  
</div>

```json
{
    "_id": "62b53dd8fced28e93d4a6e82",
            "artist": "Ave Sangria",
            "albumTitle": "Ave Sangria",
            "released": 1974,
            "format": [
                "CD",
                "Vinil",
                "Digital"
            ],
            "trackList": [
                "Dois Navegantes - (4:13)",
                "Lá Fora - (2:41)",
                "Três Margaridas - (2:48)",
                "O Pirata- (2:55)",
                "Momento Na Praça - (4:13)",
                "Cidade Grande - (4:29)",
                "Seu Waldir - (2:15)",
                "Hei! Man - (2:55)",
                "Por Que? - (4:33)",
                "Corpo Em Chamas - (3:03)",
                "Geórgia, a Carniceira - (2:42)",
                "Sob O Sol De Satã - (2:26)"
            ],
            "genre": [
                "Psychedelic",
                "Rock",
                "Folk Rock"
            ],
            "image": "https://immub-space.nyc3.digitaloceanspaces.com/capas/7592/thumbnails/m_7592ca.jpg",
            "createdAt": "2022-06-24T04:30:16.256Z",
            "updatedAt": "2022-06-24T04:30:16.256Z",
            "__v": 0
}
```
<div align = "justify">

Após o término da fase de cadastramento dos artistas e seus respectivos álbuns, foram desenvolvidas as lógicas necessárias para o funcionamento dos métodos, contidas dentro de funções. A cada função, um tratamento de erro foi criado por método **try-catch**, e os devidos status aplicados. Dentre os casos positivos, temos o status ***200*** indicando sucesso e ***201***, indicando que um item foi criado. Dentre os erros, podemos destacar o  ***404***, onde um item não pode ser encontrado e o ***500***, indicando erro interno do servidor.  
Com as lógicas contruídas, a próxima etapa foi a criação das seguintes rotas:

</div>

###  ROTAS: 

####  Método GET: ARTISTAS

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                      |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:     |
|  `GET`   | localhost:PORT/artist/all                   |                            Lista de todos os artistas cadastrados         |
|  `GET`   | localhost:PORT/artist/by_id/:id             |                          Busca uma artista por ID             |
|  `GET`   | localhost:PORT/artist/by_name/?             |Busca artistas por nome artístico|
|  `GET`   | localhost:PORT/artist/genre/?           |                                  Busca artistas por gênero musical  |

<br>
</div>

####  Método GET: ÁLBUNS

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                      |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:     |
|  `GET`   | localhost:PORT/album/all                   |                            Lista de todos os álbuns cadastrados         |
|  `GET`   | localhost:PORT/album/by_id/:id             |                          Busca uma álbum por ID             |
|  `GET`   | localhost:PORT/album/by_name/?             |Busca álbuns pelo título do álbum ou pelo nome do artista|
|  `GET`   | localhost:PORT/album/genre/?           |                                  Busca álbuns por gênero musical  |
<br>
</div>

<br>
</div>

####  Método PUT: ARTISTAS

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|   `PUT`  |  localhost:PORT/artist/update/:id       |Busca por ID e atualiza o cadastro. Os itens que não foram enviados para atualização são mantidos conforme o cadastro inicial |

<br>
</div>

####  Método PUT: ÁLBUNS

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|   `PUT`  |  localhost:PORT/album/update/:id       |Busca por ID e atualiza o cadastro. Os itens que não foram enviados para atualização são mantidos conforme o cadastro inicial |

<br>
</div>

####  Método DELETE: ARTISTAS

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
| `DELETE` |  localhost:PORT/artist/delete/:id     |Busca por ID e deleta o cadastro do artista                 |

<br>
</div>

####  Método DELETE: ÁLBUNS

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
| `DELETE` |  localhost:PORT/album/delete/:id     |Busca por ID e deleta o cadastro do álbum                 |

<br>
</div>



####  Método POST: ARTISTAS

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  |     localhost:PORT/artist/create        |                        Cadastra um novo artista                |

<br>
</div>

####  Método POST: ÁLBUNS

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  |     localhost:PORT/album/create        |                        Cadastra um novo album                |

<br>
</div>



<div align = "justify">


##  INFORMAÇÕES TÉCNICAS 
###  DEPENDÊNCIAS:

<div align = "justify">

Para que fosse possível a execução desse projeto, foi necessário a utilização de algumas dependências, descritas a seguir:
</div>

<br>

###  ⚙️ Módulos:

<div align = "justify">

- [Express](https://www.npmjs.com/package/express) - Framework para aplicativo da web do Node.js;
<br>

- [Nodemon](https://www.npmjs.com/package/nodemon) - Ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor;
<br>

- [Cors](https://www.npmjs.com/package/cors) - Permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
 <br>

 - [Mongoose](https://www.npmjs.com/package/mongoose) - É uma biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre MongoDB e a estrutura de aplicativo da web Express.
 <br>

 - [Dotenv](https://www.npmjs.com/package/dotenv) - Carrega variáveis de ambiente de um arquivo .env para process.env.

 - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - É uma string de caracteres que, caso cliente e servidor estejam sob HTTPS, permite que somente o servidor que conhece o ‘segredo’ possa validar o conteúdo do token e assim confirmar a autenticidade do cliente.

 
 <br>
</div>

### 📑 Arquivos: 

<div align = "justify">

- [package-lock.json](https://github.com/Geankre/ON15-TET-S13-PG-III/blob/Geankre/projeto_guiado/package-lock.json) - Especifica a versão e suas dependências;
<br>

- [package.json](https://github.com/Geankre/ON15-TET-S13-PG-III/blob/Geankre/projeto_guiado/package.json) - Arquivo de configuração utilizado para estipular e configurar dependências;
<br>

- [.gitignore](https://github.com/Geankre/ON15-TET-S13-PG-III/blob/Geankre/projeto_guiado/.gitignore) - Arquivo que lista quais arquivos ou pastas o Git deve ignorar;
<br>

</div>

<br>

###  INSTALAÇÃO: 

1. Entre na pasta onde você deseja clonar o repositório. Abra o **git** nela e digite: 

    ```bash
    $ git clone https://github.com/Geankre/ON15-TET-S14-AUTH
     ```

2. Digite a linha abaixo para entrar na branch correta: 

   ```bash
    $ git checkout Geankre
     ```

3. Digite a linha abaixo para entrar na pasta correta: 

    ```bash
    $ cd projeto_guiadopara_o_lar/
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

- Importe a coleção para teste deste servidor clicando [aqui](https://www.getpostman.com/collections/750a72ed6edfc4077506)!

- Copie o link acima e, no [Postman](https://www.postman.com/downloads/), clique em *Import* -> *Link* (cole o link) -> *Continue* -> *Import*.

- Ou forke diretamente para o seu Postman através do link:<div align = "justify"> [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/750a72ed6edfc4077506?action=collection%2Fimport) </div>
<br>

### 👋🏾 AUTORA: 

- [Geankre Souza](https://github.com/Geankre)
<br>

- [LinkedIn](https://www.linkedin.com/in/geankresouza/)
<br>
