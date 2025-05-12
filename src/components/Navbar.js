import { Link } from 'react-router-dom';
import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => (
  <RBNavbar bg="dark" variant="dark" expand="lg">
    <Container>
      <RBNavbar.Brand as={Link} to="/">Movie Explorer</RBNavbar.Brand>
      <RBNavbar.Toggle />
      <RBNavbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
        </Nav>
      </RBNavbar.Collapse>
    </Container>
  </RBNavbar>
);

export default Navbar;
