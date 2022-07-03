import CreateDashboard from "../../Components/CreateDashboard"
import ReadDashboard from "../../Components/ReadDashboard"
import UpdateDashboard from "../../Components/UpdateDashboard"
import { useState } from "react"
import { addUser } from "../../service/user"
import './style_dashboard.css'


const DashboardPage = () => {

    const [showCreate, setShowCreate] = useState(false)
    const [showRead, setShowRead] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const [user, setUser] = useState({nome:'', email:'', curso:''})

    const handleHidde = () => {
        setShowCreate(false)
        setShowRead(false)
        setShowUpdate(false)
    }

    const handleShowCreate = () => {
        setShowCreate(true)
        setShowRead(false)
        setShowUpdate(false)
    }

    const handleShowRead = () => {
        setShowCreate(false)
        setShowRead(true)
        setShowUpdate(false)
    }

    const handleShowUpdate = () => {
        setShowCreate(false)
        setShowRead(false)
        setShowUpdate(true)
    }

    function handleChange(event) {
        const { name, value } = event.target
    
        setUser((prevState) => ({
          ...prevState,
          [name]: value,
        }))
      }

    const postUser = async (event) => {
        event.preventDefault()
        await addUser({
            nome: user.nome,
            email: user.email,
            curso: user.curso
        })
    }

    return(
        <div>
            <header>
                <div className="header">
                    <button className="buttonHeader" onClick={handleHidde}>Início</button>
                    <button className="buttonHeader" onClick={handleShowCreate}>Cadastrar</button>
                    <button className="buttonHeader" onClick={handleShowRead}>Alunos</button>
                    <button className="buttonHeader" onClick={handleShowUpdate}>Atualizar</button>
                </div>
            </header>
            {showCreate === true && 
                <CreateDashboard nome={user.nome} email={user.email} curso={user.curso} handleChanges={handleChange} handleClick={postUser}/>
            }
            {showRead === true && 
                <ReadDashboard/>
            }
            {showUpdate === true && 
                <UpdateDashboard/>
            }
        </div>
    )
}

export default DashboardPage