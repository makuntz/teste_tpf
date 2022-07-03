import httpservice from "./httpservice";
import { apiurl } from "../config";

export async function addUser (data) {
    try{
        const { data: resposta } = await httpservice.post(
            `${apiurl}/adduser`,
            data,
          )
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
    } catch (error) {}
  }