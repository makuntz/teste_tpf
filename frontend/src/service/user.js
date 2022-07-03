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
