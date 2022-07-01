import { MongoClient } from 'mongodb';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


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
export async function updateUser(email, novoEmail) {
    const client = new MongoClient(uri);
    await client.connect();

    const usuario = await findUser(email);
    if (!usuario) {
        console.error(`Email ${email} ainda nao registrado.`);
        return false;
    }
    try{
        await client.db().collection('usuario').updateOne(
            { $set: novoEmail }
        )
        
    } catch (err) {
        console.log(`Nao é possível atualizar usuário. Err: ${err}`);
    }
    

    // const usuario = await findUser(email);
    // if (!usuario) {
    //     console.error(`Email ${email} ainda nao registrado.`);
    //     return false;
    // }

    // let updated = false;
    // try {
        // const novoUsuario = {
        //     name: novoNome ? novoNome : usuario.name,
        //     email: novoEmail ? novoEmail : usuario.email
        // }
        

    //     await client.db().collection('usuario').updateOne(
    //         { _id: usuario._id },
    //         { $set: novoUsuario },
    //         { upsert: false }
    //     );
    //     console.log('Usuario foi atualizado!');
        // updated = true;
    // } catch (err) {
    //     console.log(`Nao foi possível atualizar usuário. Err: ${err}`);
    // } finally {
    //     await client.close();
    //     return updated;
    // }
//     }
}
