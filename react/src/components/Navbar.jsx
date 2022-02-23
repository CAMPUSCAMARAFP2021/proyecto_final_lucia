import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
    return <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#">Features</Nav.Link>
        <Nav.Link href="#">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <br />
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  
    <br />
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </>
}


export default NavBar;