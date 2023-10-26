import React from 'react'
import { Navbar, Nav, Container, NavDropdown  }from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Curso React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavDropdown title="REACT 2023" id="basic-nav-dropdown">
          <NavDropdown.Item  href="/monster-rolex">Monster Rolodex</NavDropdown.Item>
             
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>

          <NavDropdown title="UDEMY" id="basic-nav-dropdown">
          <NavDropdown.Item  href="/ola-mundo">Olá Mundo!</NavDropdown.Item>
              <NavDropdown.Item  href="/calculadora">Calculadora</NavDropdown.Item>
              <NavDropdown.Item  href="/conversor-moedas">
                Conversor de Moedas
              </NavDropdown.Item>
              <NavDropdown.Item href="/gerenciador-tarefas">Gerenciador de Tarefas</NavDropdown.Item>
              <NavDropdown.Item href="/gerenciador-api-rest">Gerenciador de API RESTful</NavDropdown.Item>
              <NavDropdown.Item  href="/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item  href="/mini-ecomerce">
                Mini E-commerce
              </NavDropdown.Item>
              <NavDropdown.Item  href="/upload-imagem">Upload Imagem</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <Nav.Link href="/signup">Registrar</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
