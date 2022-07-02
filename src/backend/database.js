import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://admin:1234@cluster0.dmldl.mongodb.net/mydb?retryWrites=true&w=majority";

//Create
export async function addUser(user){
    const client = new MongoClient(uri);
    await client.connect();


    try {
        await client.db().collection('usuario').insertOne(user);
        console.log('Usuario foi registrado!');
        
    } catch (err) {
        console.log(`Nao é possível registrar usuário. Err: ${err}`);
    } finally {
        await client.close();
        
    }
}


//Update
export async function updateUser(email, novoEmail, nome, novoNome, curso, novoCurso) {
    const client = new MongoClient(uri);
    await client.connect();

    const usuario = await client.db().collection('usuario').findOne({email: email})
    if (!usuario) {
        console.error(`Email ${email} ainda nao registrado.`);
        return false;
    }
    try{
        await client.db().collection('usuario').updateOne(
            {
                "nome": nome,
                "email": email,
                "curso": curso
            },
            {$set: {
                "nome": novoNome,
                "email": novoEmail,
                "curso": novoCurso
                }
            }
        )
        
    } catch (err) {
        console.log(`Nao é possível atualizar usuário. Err: ${err}`);
    } finally {
        await client.close();
        
    }
    
}


