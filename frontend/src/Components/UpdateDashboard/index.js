import { useForm } from "react-hook-form";
import { useState , useEffect} from 'react';
import './style_update.css'

const UpdateDashboard = (props) => {

    return(
        <div>
            <div className="containerUpdate" >
                <form className="update" >
                        <input type="text" name='nome' value={props.nome}  placeholder="Nome do Aluno"/>

                        <input type="email" name='email' value={props.email}  placeholder="Email"/>

                        <input type="text" name='curso' value={props.curso}  placeholder="Curso"/>
                        

                        <button className='buttonCreate' onClick={props.handleEdit}>Editar</button>
                    </form>
            </div>
        </div>
    )
}

export default UpdateDashboard