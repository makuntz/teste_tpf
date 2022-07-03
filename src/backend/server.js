import { MongoClient } from 'mongodb'
import express from 'express'
import {addUser, listUser, updateUser} from './database.js'
const uri = "mongodb+srv://admin:1234@cluster0.dmldl.mongodb.net/mydb?retryWrites=true&w=majority";


const app = express();

app.use(express.json());


app.get('/', (req, res, next) => {

    res.sendStatus(200);
});

//testar
app.post('/login', async (req, res, next) => {
    const client = new MongoClient(uri);
    await client.connect();
    const {login, senha} = req.body //names dos inputs
    const admin = await client.db().collection('usuario').findOne({email: email})

    if(admin === null){
        console.log('nao logado')
    } else{
        if(login && senha == admin){
            req.session.admin = email
            res.sendStatus(200)
            console.log(req.session)
        }
    }

})



app.post('/usuario/adicionar', async (req, res, next) => {
    const client = new MongoClient(uri);
    await client.connect();

    const email = req.body.email
    const emailExiste = await client.db().collection('usuario').findOne({email: email})
    if (emailExiste) {
        console.error(`Email ${email} já registrado.`);
        return true;
    }

    const {userNome, userEmail, userCurso} = req.body //name dos inputs

    const user = {
        nome: userNome,
        email: userEmail,
        curso: userCurso
    }

    await addUser(user)
    res.sendStatus(200);
});

app.get('/usuario/listar/:email', async (req, res, next) => {
    const client = new MongoClient(uri);
    await client.connect();

    const email = req.params.email //email que admin vai digitar no input

    await listUser(email)
    
})


//nao esquecer de trocar para put no postman
app.put('/usuario/atualizar', async (req, res, next) => {
    const client = new MongoClient(uri);
    await client.connect();

    let novoNome = 'leandro1234' //valor do input
    let novoEmail = 'mk1234@gmail.com' //valor do input
    let novoCurso ='coach' //valor do input
    
    const emailBody = req.body.email //valor do input do filtro
    const userFound = await client.db().collection('usuario').findOne({email: emailBody})

    const nome = userFound.nome
    const email = userFound.email
    const curso = userFound.curso

    updateUser(nome, novoNome, email, novoEmail, curso, novoCurso)  
    console.log('foi')
    res.sendStatus(200)
})



app.listen(3001, () => {
    console.log('Server running in http://127.0.0.1:3001')
});


   