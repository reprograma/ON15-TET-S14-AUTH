const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

exports.checkAuth = (req, res, next) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1];
    
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
