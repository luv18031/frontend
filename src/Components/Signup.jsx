import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { userApi } from "./misc/UserApi";


export default function Signup(){

    const Auth = useAuth()

    const isLoggedIn = Auth.userIsAuthenticated()


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const handleOnChange = (e, {name, value}) => {
        if (name === 'username') {
            setUsername(value)
        } else if (name === 'email') {
            setEmail(email)
        } else if (name === 'password') {
            setPassword(password)
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

            
        }
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
    </Form>
    )
}