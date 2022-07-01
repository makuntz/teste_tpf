import { MongoClient } from 'mongodb';


const uri = "mongodb+srv://admin:1234@cluster0.dmldl.mongodb.net/mydb?retryWrites=true&w=majority";

export async function addUser(user){
    const client = new MongoClient(uri);
    await client.connect();

    try {
        await client.db().collection('usuario').insertOne(user);
        console.log('Customer was added to the database!');
        
    } catch (err) {
        console.log(`Unable to add customer to the database. Err: ${err}`);
    } finally {
        await client.close();
        
    }
}
