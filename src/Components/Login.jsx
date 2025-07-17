import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { parseJwt } from './misc/Helpers';
import { userApi } from './misc/UserApi';

function Login() {

  const Auth = useAuth()

  const isLoggedIn = Auth.userIsAuthenticated()

  const [isError, setIsError] = useState(false)

  const initialState = {
    // name: "",
    username: "",
    password: ""
  }

  // const [csrfToken, setCsrfToken] = useState('');

  // useEffect(() => {
  //   const token = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  //   setCsrfToken(token);
  //   console.log(token)
  // }, []);

  // useEffect(() => {
  //   const fetchCsrfToken = async () => {
  //     console.log("before getting token")
  //     const response = await axios.get('http://localhost:8080/csrf-token')
  //     .catch(error => {
  //       if (error.response) {
  //         // The server responded with a status code outside the 2xx range
  //         console.log('Error response:', error.response);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         console.log('Error request:', error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an error
  //         console.log('Error message:', error.message);
  //       }
  //     });
  //     console.log("after getting token")
  //     setCsrfToken(response.data.csrfToken);
  //     console.log(response)
  //   };
  //   fetchCsrfToken();
  // }, []);


  const [eachEntry, setEachEntry] = useState(initialState)
  // const {name, email, username} = eachEntry

  
  const handleOnChange = e => {
      setEachEntry({...eachEntry, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!(eachEntry.username && eachEntry.password)){
      setIsError(true)
      return 
    }

    // const token = axios.get('http://localhost:8080/csrf-token').data.token;
    try {
      const response = await userApi.authenticate(eachEntry.username, eachEntry.password)
      console.log(response)
      const data = parseJwt(response.data.token)
      console.log(data)
      const authenticatedUser = {data: data, accessToken: response.data.token}

      Auth.userLogin(authenticatedUser)

      setEachEntry(initialState)

      setIsError(false)


    } catch (error) {


      console.log(error)


    }


    // fetch('http://localhost:8080/api/auth/login', {
    //   method: "POST",
    //   body: JSON.stringify(eachEntry),
    //   headers: {
    //     // 'X-CSRF-TOKEN': csrfToken,
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    // })
    // .then( (response) => {
    //   console.log("abc",response.body)
    //   if(response.status===401){
    //     alert("Invalid login id and password");
    //   }else if(response.status===200){
    //     alert("Logged in success")
    //   }
    //   return response.json()
    // }).then((response) => {
    //   // do something with json data
    //   console.log(response.token)
    //   localStorage.setItem('jwt-token', response.token)
    //   setEachEntry(initialState)
      
    //   return true;s
    // })
  }

  if(isLoggedIn) {
    return <Navigate to={'/'} />
  }

  return (

    
    <Form onSubmit={handleSubmit}>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        name='name'
        onChange={handleOnChange}
        type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicUsername">
        {isError ? 'Something went wrong' : ''}
        <Form.Label>Username</Form.Label>
        <Form.Control 
        name='username'
        value={eachEntry.username}
        onChange={handleOnChange}
        type="text" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        name='password'
        onChange={handleOnChange}
        value={eachEntry.password}
        type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button 
      
      variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

}

export default Login;