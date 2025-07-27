import { useEffect, useState } from "react"
import { Form, Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import { userApi } from "./misc/UserApi"

export default function UserProfile() {

    const [user, setUser] = useState({})
    
    const [isLoading, setLoading] = useState(true)
    
    
    const Auth = useAuth()
    
    const isLoggedIn = Auth.userIsAuthenticated()

    const [isError, setIsError] = useState(false)

    const initialState = {
        // name: "",
        username: "",
        password: ""
    }
    
    const [UserDetails, setUserDetails] = useState(initialState)

    useEffect(() => {
        const getUserProfile = async () => {

            try {
                console.log("Fetching users...")
                console.log("Current user:", Auth.getUser())
                const response = await userApi.getUserProfile(Auth.getUser())
                console.log("Users fetched successfully")
                console.log(response.data)
                setUser(response.data)
            } catch (error) {
                console.error("Error fetching users:", error)
            } finally {
                setLoading(false)
            }
        }

        getUserProfile()
    }, [isLoggedIn])

    if(!isLoggedIn) {
        return <Navigate to={'/login'} />
    }

    // const handleOnChange = e => {
    //     setUserDetails({...UserDetails, [e.target.name]: e.target.value})
    // }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if(!(UserDetails.username && UserDetails.password)){
    //         setIsError(true)
    //         return 
    //     }
    //     try {
    //         const response = await userApi.authenticate(UserDetails.username, UserDetails.password)
    //         const data = parseJwt(response.data.token)
    //         const authenticatedUser = {data: data, accessToken: response.data.token}

    //         Auth.userLogin(authenticatedUser)

    //         setUserDetails(initialState)

    //         setIsError(false)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <Form >
            

        </Form>
    );
}   