import React from 'react'
import {Button, Form} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {useState} from 'react'
import { RouteComponentProps } from 'react-router'


interface Props{
  history: RouteComponentProps['history']
}
const Signup = ({history}: Props) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')



  return (
    <FormContainer>
    <h1>Cadastrar </h1><br/>
  <Form>
  <Form.Group className="mb-3" controlId="name">
      <Form.Control type="name" placeholder="Nome" 
      value={name}
        onChange={e => setName(e.target.value)} 
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="email">
      <Form.Control type="email" placeholder="E-mail" 
      value={email}
        onChange={e => setEmail(e.target.value)} 
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="password">
      <Form.Control type="password" placeholder="Senha" 
      value={password}
        onChange={e => setPassword(e.target.value)} 
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="cpassword">
      <Form.Control type="password" placeholder="Confirmar senha" 
      value={cpassword}
        onChange={e => setCPassword(e.target.value)} 
      /><br/>
      <a href="/CamSignup"> Reconhecimento Facial</a>
    </Form.Group>
    <Button variant="primary" type="submit">
      Confirmar
    </Button>
  </Form>
  </FormContainer>
  )
}

export default Signup
