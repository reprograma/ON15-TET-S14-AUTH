<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

exports.checkAuth = async (req, res, next) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).send("Erro no header")
    }
    try{
        jwt.verify(token, SECRET, function(erro) {
          if (erro) {
            return res.status(403).send('Não autorizado');
          }
        })
        next()

    }catch(erro){
console.error(erro)
    }}
=======
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

exports.checkAuth = (req, res, next) => {
    const authHeader = req.get('authorization')
    console.log("AUTH HEADER", authHeader)
    const token = authHeader.split(' ')[1];
    console.log("TOKEN", token)
    
    if (!token) {
      return res.status(401).send("Erro no header")
    }

    try {
        jwt.verify(token, SECRET, (err) => {
            if(err) {
                return res.status(401).send("Não autorizado")
            }
        });

        next();
          
    } catch(err) {
        console.error(err);
    }
}

// module.exports = { checkAuth }
>>>>>>> 3a17d9db4b2b11e889c721545fea9312b22c1e6a
