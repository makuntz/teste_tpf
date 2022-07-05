import { useEffect, useState } from 'react'
import UserListItem from '../UserListItem'
import { getUsers, deleteUser, updateUsers  } from '../../service/user'


function UserList(props) {
  const [users, setUsers] = useState([])

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
    await updateUsers(id)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <ul className="userlist">
      {users.map((user) => (
        <UserListItem  key={user._id} user={user} deleteUser={()=> handleDelete(user._id)} updateUsers={()=> handleEdit(user._id)}/>
      ))}
    </ul>
  )
}

export default UserList