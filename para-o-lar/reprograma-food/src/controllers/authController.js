const UserSchema = require('../models/userSchema');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const login = (req, res) => {
    try{
        UserSchema.findOne({ email: req.body.email }, (error, user) => {
            if(!user) {
                return res.status(401).send({
                    message: "User não encontrado",
                    email: `${req.body.email}`
                })
            }
            const validPassword = bcrypt.compareSync(req.body.password, user.password)

            if(!validPassword) {
              return res.status(401).send({
                  message: "Login não autorizado"
              })
            }
            const token = jwt.sign({ userId: user._id }, SECRET, {
                expiresIn: "1d"
               })

               UserSchema.findByIdAndUpdate(user._id, { token })
    
            res.status(200).send({
                data: { email: user.email, role: user.role },
                token
            })
        })


    }catch(error){
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    login
};