import { useForm } from "react-hook-form";
import { useState , useEffect} from 'react';
import './style_update.css'
import { updateUser } from "../../service/user";

const UpdateDashboard = (props) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [curso, setCurso] = useState('')

    useEffect(()=>{
        console.log(nome, email, curso)
    }, [nome, email, curso])

    const handleNomeChange = (e) => {
        setNome(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleCursoChange = (e) => {
        setCurso(e.targe.value)
    }

    const onUpdateClicked = async (id) => {
        const body = {
            nome: nome,
            email: email || props.email,
            curso: curso || props.curso
        }
        await updateUser(id, body)
    }

    return(
        <div>
            <div className="containerUpdate" >
                <form className="update" >
                        <p>Editando Usuário {props.nome}</p>
                        <input type="text" name='nome' defaultValue={props.nome} onChange={(e)=> handleNomeChange(e)}/>

                        <input type="email" name='email' defaultValue={props.email} onChange={(e)=> handleEmailChange(e)}/>

                        <input type="text" name='curso' defaultValue={props.curso} onChange={(e) => handleCursoChange(e)} placeholder="Curso"/>
                        

                        <button className='buttonCreate' onClick={()=> onUpdateClicked(props.id)}>Editar</button>
                    </form>
            </div>
        </div>
    )
}

export default UpdateDashboard