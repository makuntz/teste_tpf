


function UserLisItem(props) {
    return (
      <li className="MovieListItem">
        {props.user.nome}
        <button>
          <img src="/images/delete.svg" alt="Delete movie" />
        </button>
      </li>
    )
  }
  
  export default UserLisItem