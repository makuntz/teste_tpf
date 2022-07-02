import { useHistory, Link } from "react-router-dom"
import './style.css'

const Login = () => {


    return(
        <div className="container">
            <div >
                <form className="login">
                    <input type="email"  placeholder="Digite seu email"/>
                    <input type="password" placeholder="Digite sua senha"/>
                    <Link to='/dashboard'><button>Login</button></Link>
                    <p>Certifique-se de que você tenha cadastro</p>
                </form>
                
            </div>
        </div>
    )
}

export default Login