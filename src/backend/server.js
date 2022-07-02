import { MongoClient } from 'mongodb'
import express from 'express'
import {addUser, updateUser} from './database.js'
const uri = "mongodb+srv://admin:1234@cluster0.dmldl.mongodb.net/mydb?retryWrites=true&w=majority";


const app = express();

app.use(express.json());


app.get('/', (req, res, next) => {

    res.sendStatus(200);
});


app.post('/usuario/adicionar', async (req, res, next) => {
    const client = new MongoClient(uri);
    await client.connect();

    const email = req.body.email
    const emailExiste = await client.db().collection('usuario').findOne({email: email})
    if (emailExiste) {
        console.error(`Email ${email} já registrado.`);
        return true;
    }

    const user = req.body
    await addUser(user)

    res.sendStatus(200);
});

app.get('/usuario/listar', async (req, res, next) => {
    const client = new MongoClient(uri);
    await client.connect();

    const email = 'mk1@gmail.com' //email que admin vai digitar no input


    try{
        const lista = await client.db().collection('usuario').findOne({email: email})
        console.log(lista.curso)
        res.send(lista.nome) //ver como lista mais de um atributo
        
    } catch (err) {
        console.log(`Nao foi possível realizar a busca. Err: ${err}`);
    } finally {
        await client.close();
        
    }
    
})


//nao esquecer de trocar para put no postman
app.put('/usuario/atualizar', async (req, res, next) => {
    let novoEmail = '' //valor do input
    let novoNome = '' //valor do input
    let novoCurso ='' //valor do input
    const email = req.body.email //apenas teste no postman - puxar do banco - find?
    const nome = req.body.nome  //apenas teste no postman - puxar do banco
    const curso = req.body.curso //apenas teste no postman - puxar do banco

    updateUser(email, novoEmail, nome, novoNome, curso, novoCurso)  
    res.sendStatus(200)
})


app.listen(3001, () => {
    console.log('Server running in http://127.0.0.1:3001')
});


   