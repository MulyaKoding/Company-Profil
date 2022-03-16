import { useLocation, useNavigate } from "react-router-dom";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import NavbarLogo from "assets/images/logo_navbar.png";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <Image src={NavbarLogo} alt={NavbarLogo} height={39} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => navigate("/")}
              className={`text-primary${pathname === "/" ? " fw-bold" : ""}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/services")}
              className={`text-primary${pathname === "/services" ? " fw-bold" : ""}`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/products")}
              className={`text-primary${pathname === "/products" ? " fw-bold" : ""}`}
            >
              Products
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/about")}
              className={`text-primary${pathname === "/about" ? " fw-bold" : ""}`}
            >
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
