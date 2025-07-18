import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from "./context/AuthContext";
import { userApi } from "./misc/UserApi";

function Signup(){

    const Auth = useAuth()

    const isLoggedIn = Auth.userIsAuthenticated()

    const navigate = useNavigate();


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const handleOnChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        if(!(username && password && email)){
            setIsError(true)
            setErrorMessage('Please enter valid inputs')

            return 
        }

        const user = {email, username, password}

        try {
            const response = await userApi.signup(user)
            if(response.status===201){
                navigate('/login')  
            }else if(response.status===200){
              setIsError(true)
              setErrorMessage('User email or username already exists.')
            }
            
        } catch (e){
          console.log(e)
        }
    }

    if(isLoggedIn) {
      return <Navigate to={'/'} />
    }

    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        name='email'
        value={email}
        onChange={handleOnChange}
        type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        {/* {isError ? 'Something went wrong' : ''} */}
        <Form.Label>Username</Form.Label>
        <Form.Control 
        name='username'
        value={username}
        onChange={handleOnChange}
        type="text" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        name='password'
        onChange={handleOnChange}
        value={password}
        type="password" placeholder="Password" />
      </Form.Group>
      <Button 
      variant="primary" type="submit">
        Register
      </Button>
      {isError ? <div>{errorMessage}</div>:""}
    </Form>
    )
}

export default Signup;