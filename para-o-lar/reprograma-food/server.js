const app = require('./src/app');
const PORT = process.env.PORT;

app.listen(PORT, () => {console.log(`TOC TOC! Quem bate? É a porta! Que porta? A porta ${PORT}!`)});