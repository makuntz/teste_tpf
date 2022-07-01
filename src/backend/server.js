import { MongoClient } from 'mongodb';
import express from 'express'
import {addUser} from './database.js'

const app = express();

app.use(express.json());


app.get('/', (req, res, next) => {
    console.log('Hellowww');

    res.sendStatus(200);
});

app.post('/usuario/adicionar', async (req, res, next) => {
    const user = req.body

    await addUser(user)

    console.log('Holla muchacho');
    res.sendStatus(200);
});



app.listen(3001, () => {
    console.log('Server running in http://127.0.0.1:3001')
});


    // const uri = "mongodb+srv://admin:1234@cluster0.dmldl.mongodb.net/mydb?retryWrites=true&w=majority";

    // const client = new MongoClient(uri);
    // await client.connect();


    // try {
    //     await client.db().collection('usuario').insertOne(user);
    //     console.log('Customer was added to the database!');
        
    // } catch (err) {
    //     console.log(`Unable to add customer to the database. Err: ${err}`);
    // } finally {
    //     await client.close();
        
    // }
    // async function addUser(user){
        
    // }