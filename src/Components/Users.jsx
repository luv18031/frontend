import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import { userApi } from "./misc/UserApi"

export default function Users(){

    const Auth = useAuth()

    const isLoggedIn = Auth.userIsAuthenticated()

    const [isLoading, setLoading] = useState(true)

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {

            try {
                console.log("Fetching users...")
                console.log("Current user:", Auth.getUser())
                const response = await userApi.getAllUsers(Auth.getUser())
                console.log("Users fetched successfully")
                console.log(response.data)
                setUsers(response.data)
            } catch (error) {
                console.error("Error fetching users:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [isLoggedIn])

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(!isLoggedIn) {
      return <Navigate to={'/login'} />
    }

    return (
        <div>
            <h1>Users</h1>
            <p>List of users will be displayed here.</p>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.username}</h2>
                    <p>Email: {user.email}</p>
                    <p>Created At: {new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
            ))}
            <p>Check console for user data.</p>
        </div>
    )
}