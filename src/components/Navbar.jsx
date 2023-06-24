import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
const NavBar = () => {
  return (
    <Navbar expand="lg" bg="white" variant="light" fixed="top" className='ms-auto'>
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
