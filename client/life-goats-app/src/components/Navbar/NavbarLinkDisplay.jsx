import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarLinkDisplay = ({ active, setActive, handleLinkClick, homeLinks, pageLinks }) => {
  return (
    <div>
      <Container fluid>
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Dropdown"
            menuVariant="dark"
          >
            {homeLinks.map((link) => (
              <NavDropdown.Item
                key={link.id}
                onClick={() => handleLinkClick(link)} // Handle click event
              >
                {link.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Container>
    </div>
  );
};

export default NavbarLinkDisplay;
