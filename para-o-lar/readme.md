# Compartilhe sua ideia!

<hr>

### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Ferramentas utilizadas](#principais-ferramentas-utilizadas)

- [Acesso ao projeto](#acesso-ao-projeto)

- [Abrir e rodar o projeto](#abrir-e-rodar-o-projeto)

- [Desenvolvedores](#desenvolvedores)

## Descrição do projeto 

<p align="justify">
 Projeto Compartilhe sua idea! foi desenvolvido para o aprendizado de API realizando uma intergração com MongoDB e também Autentificação e Autorização pela iniciativa do curso Todas em Tech  do Reprograma . 
 Essa API tem como objetivo que um usuario após se cadastrar e realizar o seu login, ele poderá criar uma publicação onde pode compartilhar com outros usuarios também cadastrados, sua idea!

## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Realiza cadastrado de novos usuarios.

:heavy_check_mark: `Funcionalidade 2:` Possui um sistema login que autentica e autoriza o usuario cadastrado.

:heavy_check_mark: `Funcionalidade 3:` O usuario pode criar um publicação, e somente ele pode excluir ou modifica-la .

:heavy_check_mark: `Funcionalidade 4:` O usuario pode ver as publicações de outros usuarios mas não pode modificar e nem alterar a publicação que não seja feita por ele.

## Principais ferramentas utilizadas
- NodeJS
- MongoDB
- JWT
- Bcrypt
- Express
- Mongoose

###

## Acesso ao projeto

Você pode [acessar o código fonte do projeto](https://github.com/mariaftavares/ON15-TET-S14-AUTH/tree/Maria_Fernanda_Tavares/para-o-lar).

## Abrir e rodar o projeto
Primeiro você precisa ter instalado no seu computador `NodeJS` caso ainda não tenha clique [aqui](https://nodejs.org/en/download/) e realize a instalação. Após instalar você pode [clonar](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository) o repositorio na sua maquina e abrir o editor de código-fonte da sua preferência, como por exemplo [VSCODE](https://code.visualstudio.com).
Para abrir o projeto no `VSCODE`, é necessário:  
- Ir na barra de menus e selecionar a opção `file` ou `arquivo`;
- Selecione a opção `open folder ...` e procure a pasta onde está o projeto;
- Por fim clique em `OK`.
- Entre na pasta  `ON15-TET-S14-AUTH` e depois na pasta `para-o-lar`, ao entrar na pasta execute o comando `npm install` e  instale todas as depedencias necessarias para rodar o projeto.

 ``` bash
├── ON15-TET-S14-AUTH
│   ├── para_o_lar
```
- Após isso crie um arquivo .env e siga como base o exemplo dado no arquivo `.env.example` colocando a porta em que deseja rodar o seu servidor e também o link do seu banco no MongoDB caso não tenha clique [aqui](https://www.automalabs.com.br/tutorial-mongodb-atlas-conta-bancos-e-colecoes/) e aprenda como criar um. Também é necessario adicionar a chave que deseja gerar o seu token, para obter a chave você pode acessar [travistidwell](https://travistidwell.com/jsencrypt/demo/) e utilizar a Public Key gerada por eles.
- Depois é so digitar `npm run dev` e utilizar o [postman](https://www.postman.com/postman/workspace/postman-public-workspace/request/create?requestId=3140f48f-c487-4a55-a045-ea0f82645fdc) para usar as rotas já feitas
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Caminho</th>
      <th>Reposta</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>POST</td>
      <td>/post/createLogin</td>
      <td>Nesta rota você pode cadastrar um novo usuario.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/post/login</td>
      <td>Nesta rota você realiza o login e é gerado um token para que você consiga acessar as demais rotas!</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/post/createPost</td>
      <td>Nesta rota você pode criar um nova publicação </td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/post/feed</td>
      <td>Nesta rota você pode visualizar todas as publicações não só criadas pelo seu usario, mas também de outros usuarios cadastrados</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/post/myposts</td>
      <td>Nesta rota você pode visualizar todas as publicações feitas por você!</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/post/changePost/:id</td>
      <td>Nesta rota você alterar a sua publicação já criada,só necessario informa o id da sua publicação</td>
    </tr>
    <td>DELETE</td>
      <td>/post/deletePost/:id</td>
      <td>Nesta rota você excluir a sua publicação,só é necessario informa o id da sua publicação</td>
    </tr>
    </tbody>
</table>

- Exemplo de cadastro de usuario
```bash
{
    "name":"teste",
    "email":"teste@gmail.com",
    "password":"123"
}

```
- Exemplo de  login
```bash
{
    "email":"teste@gmail.com",
    "password":"123"
}

```
- Exemplo para as demais rotas.
<br>
`Observação importante: `é necessário informa para todas as demais rotas no Headers o seu token, para isso clique em `Headers` e onde está Key coloque `Authorization` e no VALUE coloque `Bearer tokengerado`.
- Criar uma publicação

```bash
{
    "description":"escreva aqui o que deseja compartilhar!"
}

```
- Modificar uma publicação

```bash
{
    "description":"escreva sua alteração aqui!"
}

```




## Desenvolvedora

| [<img src="https://avatars.githubusercontent.com/u/83185858?v=4" width=115><br><sub>Maria Fernanda Tavares</sub>](https://github.com/mariaftavares) | 
| :---: 
