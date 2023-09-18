import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Todos os direitos reservados.  &copy;2023 Karoline Yamamoto</Col>
        </Row>
      </Container>    
    </footer>
  )
}

export default Footer
