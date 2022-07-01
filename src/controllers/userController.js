const UserSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');

const getAll = async(req, res) => {
        UserSchema.find(function(err, users) {
            if (err) {
                res.status(500).send({ message: err.message })
            }
            res.status(200).send(users)
        })
    }
    /*Primeiro estilo
    const createUser= async ( req,res)= req.body:
   try {
    const (name, email, password)= req.body;
    if(!name.name && !email.email){
    res.status(404).send{(
        "message": "Campo obrigatório, deve ser preenchido!! "
    )};
};
const newUser = await userSchema.create{(
    name, mail, password
)};
const savedUser = await newUser.save ();
res.status(201).send{(
    "message": "User cadastrado com sucesso!"
)}
   }catch(err){
    console.error(err)
   }
     */





const createUser = async(req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;

    try {

        const newUser = new UserSchema(req.body);
        const savedUser = await newUser.save();
        res.status(201).send({
            "message": "Usuario criado com sucesso!",
            savedUser
        });
    } catch (err) {
        console.error(err)
    };
}

module.exports = {
    getAll,
    createUser
};