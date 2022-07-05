import { Fragment, useEffect, useState } from 'react'
import UserListItem from '../UserListItem'
import { getUsers, deleteUser, updateUsers  } from '../../service/user'
import UpdateDashboard from '../UpdateDashboard/index';


function UserList(props) {
  const [users, setUsers] = useState([])
  const [editUser, setEditUser] = useState('')

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

  async function handleEdit (id){
    users.filter((user) => user._id == id)
    setEditUser(true)
  }

  const getUserEditDashboard = (id) => {
    
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Fragment>
      <ul className="userlist">
        {users.map((user) => (
          <UserListItem  key={user._id} user={user} deleteUser={()=> handleDelete(user._id)} />
        ))}
      </ul>
      <div>
        <UpdateDashboard handleEdit={()=> handleEdit(users._id)}/>
      </div>
    
    </Fragment>
  )
}

export default UserList