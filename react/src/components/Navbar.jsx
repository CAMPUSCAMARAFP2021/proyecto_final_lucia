import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
    return <>
   
       <Navbar bg="primary" variant="dark">
      <Container>
      <Nav className="me-auto">
        <Nav.Link href="#"></Nav.Link>
        <Nav.Link href="#features"></Nav.Link>
        <Nav.Link href="#pricing"></Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  
    <br />
  
  </>
}


export default NavBar;