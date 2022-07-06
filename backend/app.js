const express = require('express')
const app = express()
const usuario = require('./routes/usuario')
const cors = require('cors')

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
      optionsSuccessStatus: 200,
    })),

app.use(express.json());
app.use(usuario)


app.get('/', (req, res, next) => {
    res.sendStatus(200);
});






module.exports = app