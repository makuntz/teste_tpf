import { useEffect, useState } from "react"
import { getUsers } from "../../service/user"
import UserList from "../ListDashboard"



const ReadDashboard = () => {
    const [users, setUsers] = useState([])

    function fetchUsers(){
        let users = getUsers()
        setUsers(users)
    }
    useEffect(() => {
        fetchUsers()
      }, [])
    
    console.log(users)
    return(
        <div>
            <UserList users={users}/>
        </div>
    )
}

export default ReadDashboard