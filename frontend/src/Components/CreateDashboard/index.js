import './style_create.css'

const CreateDashboard = (props) => {

    return(
        <div>
            <div className='containerCreate'>
                <form className="create">
                    <input type="text" name='nome' value={props.nome} onChange={props.handleChanges} placeholder="Nome do Aluno"/>

                    <input type="email" name='email' value={props.email} onChange={props.handleChanges} placeholder="Email do Aluno"/>

                    <input type="text" name='curso' value={props.curso} onChange={props.handleChanges} placeholder="Curso"/>

                    <button className='buttonCreate' onClick={props.handleClick}>Cadastrar</button>
                </form>
                
            </div>
        </div>
    )
}

export default CreateDashboard