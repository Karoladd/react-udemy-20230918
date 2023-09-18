import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react'

export default function Calculadora() {

  const [txtNumeros, setTxtNumeros] = useState('0');

  function addNum(numero: string){
      setTxtNumeros(txtNumeros + numero);
  }

  function defOperac(op:string){
    setTxtNumeros(op)
  }
  return (
    <>
      <header>
        <title>Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </header>
      <h1 className="p-10">Calculadora</h1>
      <br/>
      <div style={{
        padding: '20px',
        backgroundColor: '#121212',
        margin: '10px',
        background: 'transparent !important',
        width: '400px',
        borderRadius: '10px'
      }}>

      <Container>
      <Row>
          <Col xs="3">
            <Button className="h-60 w-60" variant="danger">C</Button>
          </Col>
          <Col xs="9">
            <Form.Control className="h-60 w-100" type="text" 
            name="txtNumeros" 
            value={txtNumeros}
            readOnly/>
          </Col>
        </Row>
        <Row style={{paddingTop:"10px"}}>
          <Col>
            <Button className="h-60 w-60" variant="light"
            onClick={() => addNum('7')}>7</Button>
          </Col>
          <Col>
            <Button className="h-60 w-60" variant="light"
            onClick={() => addNum('8')}>8</Button>
          </Col>
          <Col>
            <Button className="h-60 w-60" variant="light"
            onClick={() => addNum('9')}>9</Button>
          </Col>
          <Col>
            <Button style={{width:"70px", height:"50px"}} variant="warning"
            onClick={() => defOperac('/')}>/</Button>
          </Col>
        </Row>
        <Row style={{paddingTop:"10px"}}>
          <Col>
            <Button className="h-60 w-60" variant="light"
            onClick={() => addNum('4')}>4</Button>
          </Col>
          <Col>
            <Button className="h-60 w-60" variant="light"
            onClick={() => addNum('5')}>5</Button>
          </Col>
          <Col>
            <Button className="h-60 w-60" variant="light"
            onClick={() => addNum('6')}>6</Button>
          </Col>
          <Col>
            <Button style={{width:"70px", height:"50px"}} variant="warning"
            onClick={() => defOperac('*')}>*</Button>
          </Col>
        </Row>
        <Row style={{paddingTop:"10px"}}>
          <Col>
            <Button className="h-60 w-60" variant="light"
            onClick={() => addNum('1')}>1</Button>
          </Col>
          <Col>
            <Button className="h-60 w-60" variant="light"
            onClick={() => addNum('2')}>2</Button>
          </Col>
          <Col>
            <Button className="h-60 w-60" variant="light"
            onClick={() => addNum('3')}>3</Button>
          </Col>
          <Col>
            <Button style={{width:"70px", height:"50px"}} variant="warning"
            onClick={() => defOperac('-')}>-</Button>
          </Col>
        </Row>
        <Row style={{paddingTop:"10px"}}>
          <Col>
            <Button className="h-60 w-60" variant="light"
            onClick={() => addNum('0')}>0</Button>
          </Col>
          <Col>
            <Button className="h-60 w-0" variant="light">.</Button>
          </Col>
          <Col>
            <Button className="h-60 w-60" variant="success">=</Button>
          </Col>
          <Col>
            <Button style={{width:"70px", height:"50px"}} variant="warning"
            onClick={() => defOperac('+')}>+</Button>
          </Col>
        </Row>
      </Container>
      </div>

    </>
  )
}