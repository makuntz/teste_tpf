import './style_create.css'

const CreateDashboard = () => {

    return(
        <div>
            <div className='containerCreate'>
                <form className="create">
                    <input type="text"  placeholder="Nome do Aluno"/>
                    <input type="email" placeholder="Email do Aluno"/>
                    <input type="text" placeholder="Curso"/>

                    <button className='buttonCreate'>Cadastrar</button>
                </form>
                
            </div>
        </div>
    )
}

export default CreateDashboard