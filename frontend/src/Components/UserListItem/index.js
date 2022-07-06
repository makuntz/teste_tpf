import deleteIcon from '../../images/delete.svg'
import editarIcon from '../../images/editar.svg'
import './style_userlistitem.css'

function UserLisItem(props) {

  return (
    <li className="AlunoListItem">
      <div className="aluno_itens">
        <div className="aluno_nome">{props.user.nome}</div>
        <div className="aluno_email">{props.user.email}</div>
        <div className="aluno_curso">{props.user.curso}</div>
      </div>
      
      <button className='button_lixeira' onClick={() => props.deleteUser(props.user._id)}  >
        <img src={deleteIcon} width="15px" className="lixeira_icon" alt="Delete aluno" />
      </button>
      <button className='button_editar' onClick={() => props.onEditClicked()}>
        <img src={editarIcon} width="15px" className="edita_icon" alt="Edita aluno" />
      </button>
    </li>
  )
}

export default UserLisItem