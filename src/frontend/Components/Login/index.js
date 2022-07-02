import { useHistory, Link } from "react-router-dom"
import './style_login.css'

const Login = () => {


    return(
        <div className="containerLogin">
            <div className="transparente">
                <form className="formLogin">
                    <input className="emailLogin" type="email"  placeholder="Digite seu email"/>
                    <input className="senhaLogin" type="password" placeholder="Digite sua senha"/>
                    <Link to='/dashboard'><button className="logar">Login</button></Link>
                    <p>Certifique-se de que você tenha cadastro</p>
                </form>
                
            </div>
        </div>
    )
}

export default Login