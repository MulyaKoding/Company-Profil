import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFax, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import NavbarLogo from "assets/images/logo_navbar.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="gx-4 py-3">
          <Col md={4} className="mb-3 mb-md-0">
            <Image src={NavbarLogo} alt={NavbarLogo} height={50} />
            <div style={{ fontSize: 17 }}>
              We're a team of talented developers that can help your business grow!
            </div>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <div className="h5 text-primary">Location</div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faHome} className="text-primary mt-1 mt-md-2 me-2" />
              <p>
                Marquee Executive Offices At Cyber 2 Tower 18TH Floor Suite M06_CYB, Jl. H.R Rasuna
                Said, Blok X-5 , Jakarta 12950, Indonesia
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <div className="h5 text-primary">Contact</div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary mt-1 mt-md-2 me-2" />
              <div>pt.pas@permataazzurisehat.com</div>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faPhone} className="text-primary mt-1 mt-md-2 me-2" />
              <div>(62-21) 5799 8999</div>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faFax} className="text-primary mt-1 mt-md-2 me-2" />
              <div>Fax: (62-21) 5799 8988</div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-primary text-light py-4 text-center">
        <div className="fw-bold mb-2" style={{ fontSize: 14 }}>
          Version : 2022 (β) Beta
        </div>
        <div className="fw-bold" style={{ fontSize: 14 }}>
          Copyright © 2022 Permata Azzuri Sehat
        </div>
      </div>
    </footer>
  );
};

export default Footer;
