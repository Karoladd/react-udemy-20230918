import React from 'react'
import {Button, Form} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {useState} from 'react'


const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log('submit')
  }
  
  return (
    <FormContainer>
      <h1>Login </h1><br/>
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="username">
        {/* <Form.Label></Form.Label> */}
        <Form.Control type="username" placeholder="Usuário" 
        value={username}
        onChange={e => setUsername(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        {/* <Form.Label></Form.Label> */}
        <Form.Control type="password" placeholder="Senha" 
        value={password}
        onChange={e => setPassword(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        <br/><a href="/CamLogin"> Reconhecimento Facial</a>
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
    </FormContainer>
  )
}

export default Login
