import UserListItem from "../UserListItem"

function UserList(props) {
    return (
      <ul className="userlist">
        {props.users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </ul>
    )
  }
  
  export default UserList