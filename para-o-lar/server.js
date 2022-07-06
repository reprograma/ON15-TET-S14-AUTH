const app = require('../para-o-lar/src/app')
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Servido rodando na porta ${PORT}`)
})
