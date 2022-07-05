import { Fragment, useEffect, useState } from 'react'
import UserListItem from '../UserListItem'
import { getUsers, deleteUser, updateUsers  } from '../../service/user'
import UpdateDashboard from '../UpdateDashboard/index';


function UserList(props) {
  const [users, setUsers] = useState([])
  const [editUserId, setEditUserId] = useState('')
  const [editClicked, setEditClicked] = useState(false)

  async function fetchUsers() {
    let users = await getUsers()
    setUsers(users)
  }

  async function handleDelete (id) {
    try{
      let newUsers = users.filter((user) => user._id != id)
      setUsers(newUsers)
      await deleteUser(id)

    } catch (error){
      setUsers(users)
      console.log(error)
    }
  }

  const getUserEditDashboard = (id) => {
    const user = users.find(user => user._id === editUserId)

    if(editClicked){
      return(
        <div>
          <UpdateDashboard nome={user.nome} email={user.email} curso={user.curso} id={user._id}/>
        </div>
      )
    }
    return <></>
  }

  const onEditClicked = (id) => {
    setEditClicked(!editClicked)
    setEditUserId(id)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Fragment>
      <ul className="userlist">
        {users.map((user) => (
          <UserListItem  
            key={user._id} 
            user={user} 
            deleteUser={()=> handleDelete(user._id)}
            
            onEditClicked={()=> onEditClicked(user._id)}
            />
        ))}
      </ul>
      <div>
        {getUserEditDashboard(editUserId)}
      </div>
    
    </Fragment>
  )
}

export default UserList