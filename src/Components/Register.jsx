import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {

  const initialState = {
    password: "",
    email: "",
    username: ""
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

    // const token = axios.get('http://localhost:8080/csrf-token').data.token;

    fetch('http://localhost:8080/api/auth/register', {
      method: "POST",
      body: JSON.stringify(eachEntry),
      headers: {
        // 'X-CSRF-TOKEN': csrfToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(
      (response) => {
        if(response.status===409){
          alert("User already exists");
        }else{
          alert("User registration successful")
        }
      }
    ).then(
      (response) => (response.json())
    )
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
        <Form.Label>Username</Form.Label>
        <Form.Control 
        name='username'
        onChange={handleOnChange}
        type="text" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        name='email'
        onChange={handleOnChange}
        type="text" placeholder="Enter Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        name='password'
        onChange={handleOnChange}
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

export default Register;