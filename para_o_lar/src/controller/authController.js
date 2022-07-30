const artistSchema = require('../models/artistSchema');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;
const login = (req, res) => {
    try {
        artistSchema.findOne({ nome: req.body.nome }, (error, artist) => {
            console.log("ARTISTA", artist)
            if (!artist) {
                return res.status(401).send({
                    message: "Artista não encontrado",
                    nome: `${req.body.nome}`
                })
            }
            const validPassword = bcrypt.compareSync(req.body.password, artist.password);
            console.log("A SENHA É VÁLIDA?", validPassword);
            if (!validPassword) {
                return res.status(401).send({
                    "message": "Login não autorizado!",
                    "statusCode": 401
                })
            };
            const token = jwt.sign({ name: artist.name }, SECRET);
            console.log("TOKEN CRIADO COM SUCESSO!!!", token)

            res.status(200).send({
                "message": "Login autorizado com Sucesso!",
                token
            });
        })

    } catch (error) {
        console.error(error)
    }
};


module.exports = {
    login
};