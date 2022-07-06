import httpservice from "./httpservice";
import { apiurl } from "../config";


export async function addUser (data) {
    try{
        const { data: resposta } = await httpservice.post(`${apiurl}/adduser`, data)
        console.log(resposta)
        return resposta
    } 
    catch (err){
        console.log(err)
    }
}

export async function getUsers() {
    try {
        const { data: listUsers } = await httpservice.get(apiurl + '/listuser')
        
        console.log(listUsers)
        return listUsers
    } catch (error) {
        console.log(error)
    }
  }

  export async function deleteUser (id) {
    try {
        const {data: resposta} = await httpservice.delete(apiurl + '/deleteuser/' + id)
        
        console.log(resposta)
        return resposta

    } catch (error) {
        console.log(error)
    }
  }

export async function updateUser(id, body) {
    try{
        const {data: resposta} = await httpservice.put(apiurl + '/edituser/' + id, body)
        
        return resposta

    }catch (error) {
        console.log(error)
    }
}


  export async function checkUserAdmin (body){
    try {
        const userIsAdmin = await httpservice.post(apiurl + '/login', body)

        return userIsAdmin

    } catch (error) {
        console.log(error)
        return false
    }
  }