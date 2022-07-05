import httpservice from "./httpservice";
import { apiurl } from "../config";


export async function addUser (data) {
    try{
        const { data: resposta } = await httpservice.post(`${apiurl}/adduser`, data)

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

export async function updateUsers (id) {
    try{
        const {data: resposta} = await httpservice.put(apiurl + '/edituser/' + id)

        return resposta

    }catch (error) {
        console.log(error)
    }
}


  export async function loginAdmin (){
    try {
        const data = await httpservice.login(apiurl + '/login')

        return data

    } catch (error) {
        console.log(error)
    }
  }