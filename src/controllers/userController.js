const UserSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const getAll = async (req, res) => {
  const authHeader = req.get('authorization')
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send("Erro no header")
  }

  jwt.verify(token, SECRET, function(erro) {
  if (erro) {
    return res.status(403).send('Não autorizado');
}
})
    
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};

const createUser = async (request, response) => {
const hashedPassword = bcrypt.hashSync(request.body.password, 10)
request.body.password = hashedPassword

  try {

    const newUser = new UserSchema(request.body);

    const savedUser = await newUser.save();

    response.status(201).send({
      "message": "User criado com sucesso",
      savedUser
    });

  } catch(e) {
    console.error(e);
    response.status(500).json({
      message: e.message
  });
  };
};


module.exports = {
  getAll,
  createUser
};
