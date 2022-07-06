import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { checkUserAdmin } from '../../service/user'
import './style_login.css'

const Login = () => {
    
        let navigate = useNavigate()
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
    
        const onEmailChange = (e) =>{
            const newEmail = e.target.value
            setEmail(newEmail)
        }

        const onPasswordChange = (e) => {
            const newPassword = e.target.value
            setPassword(newPassword)
        }

        const checkAut = async () => {
            const body={
                email: email,
                password: password
            }

            const userIsAdmin = await checkUserAdmin(body)

            if(userIsAdmin){
                navigate('/dashboard')
            } else {
                /* colocar um alerta */
                console.log('Usuario nao é admin')
                return
            }
        }
    

    return(
        <div className="containerLogin">
            <div className="transparente">
                <form className="formLogin">
                    <input className="emailLogin" type="email" name="email" placeholder="Digite seu email" value={email} onChange={(e)=> onEmailChange(e)}/>

                    <input className="senhaLogin" type="password" name="password" placeholder="Digite sua senha" value={password} onChange={(e)=> onPasswordChange(e)}/>

                    <button className="logar" onClick={() => checkAut()}>Login</button>
                    <p>Certifique-se de que você tenha cadastro</p>
                </form>
                
            </div>
        </div>
    )
}

export default Login