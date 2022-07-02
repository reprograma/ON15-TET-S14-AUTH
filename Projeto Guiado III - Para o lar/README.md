# ON15-TET-S13-PG-III
Turma Online Todas em Tech - Back-end | Semana 13: Projeto Guiado - CRUD com BD

# <div align = "center"> ACERVO DE LIVROS  LGBTQIAP+ </div>

<br>
<div align = "center">
<img src='https://upload.wikimedia.org/wikipedia/commons/f/fb/Gay_Pride_Flag_-_Animated.gif' width = 200 alt = 'logo reprogramafood'>
</div>
<br>

 <div align = "justify">
 ✨Olá tod@s! Bem vind@s ao meu terceiro projeto guidado. Me chamo Amanda e com auxílio da professora Paula Allemand da {reprograma},  desenvolvi uma API para busca de livros com temáticas LGBTQIAP+ que podem ser utilizados no ensino de crianças e adolescentes nas nossas escolas.


</div> 

## OBJETIVO DO DESENVOLVIMENTO
<div align = "justify">
Ensinar sobre diversidade é um compromisso que firmei enquanto educadora. Nesse sentido,  busco inserir essa temática em âmbito escolar sempre que possível.  A quantidade de livros nacionais e internacionais nos oferece um mundo de possibilidades, onde as crianças e adolescentes podem, através da leitura aprender sobre diversidade, respeito e amor. Na API, podemos visualizar esses títulos, adicionar novos conforme lançamentos e alterar características de livros já existentes - em caso de lançamento em novas editoras, por exemplo -. 
</div>

## FUNCIONAMENTO DO ACERVO

<div align = "justify">

Através do **GET** é possível visualizar todo o banco de dados relacionado ao acervo, com as seguintes informações: *titulo, autor, descrição, ano de lançamento e editora.* Com o **POST**, cadastramos novos livros de acordo com o lançamento destes. Utilizando o **PATCH** , modificamos os livros em caso de alteração, lançamento por uma nova editora. E com o **DELETE** excluímos as obras que podem não ser direcionadas para a faixa etária.

</div>

## RECURSOS UTILIZADOS:


**app.js** - Onde armazenamos as dependências e padronizamos as rotas;
**controllers** - Onde o arquivo armazena as funções e a lógica central do nosso projeto.
**models** - Nessa pasta encontramos o "Schema", ou seja, todas as informações sobre o acervo (titulo, autor, descrição, ano de lançamento e editora.)
**routes**- Onde armazenamos as rotas que possibilitam que cada rota seja acessada conforme a definição;
**data base** - Configurações e conexão com nosso banco dados.

**MÓDULOS** 

-> Express, Cors, Nodemon, Mongoose (assíncrono), dotenv-safe.

 **ARQUIVOS** 

-> package-lock.jason; package.json
Os arquivos especificam as dependências e versões, alinhando as configurações destas.

-> .gitignore 

Arquivo que determina o que o GIT deve ignorar. 
