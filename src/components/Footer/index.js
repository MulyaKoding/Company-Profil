import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFax, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";

import NavbarLogo from "assets/images/logo_navbar.png";
import IC_Facebook from "assets/images/ic_facebook.png";
import IC_Instagram from "assets/images/ic_instagram.png";
import IC_Twitter from "assets/images/ic_twitter.png";
import IC_Linkedin from "assets/images/ic_linkedin.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="gx-4 py-3">
          <Col md={4} className="mb-3 mb-md-0 text-center text-md-start">
            <Image src={NavbarLogo} alt={NavbarLogo} height={50} />
            <div style={{ fontSize: 17 }}>
              We're a team of talented developers that can help your business grow!
            </div>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <div className="h5 text-primary text-center text-md-start">Location</div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faHome} className="text-primary mt-1 mt-md-2 me-2" />
              <p>
                Marquee Executive Offices At Cyber 2 Tower 18TH Floor Suite M06_CYB, Jl. H.R Rasuna
                Said, Blok X-5 , Jakarta 12950, Indonesia
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <div className="h5 text-primary text-center text-md-start">Contact</div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary mt-1 mt-md-2 me-2" />
              <div className="mx-auto mx-md-0">pt.pas@permataazzurisehat.com</div>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faPhone} className="text-primary mt-1 mt-md-2 me-2" />
              <div className="mx-auto mx-md-0">(62-21) 5799 8999</div>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faFax} className="text-primary mt-1 mt-md-2 me-2" />
              <div className="mx-auto mx-md-0">Fax: (62-21) 5799 8988</div>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <a
                href="#"
                className="rounded-circle bg-primary d-flex justify-content-center align-items-center me-2"
                style={{ width: 33, height: 33 }}
              >
                <Image src={IC_Facebook} alt={IC_Facebook} width={25} />
              </a>
              <a
                href="#"
                className="rounded-circle bg-primary d-flex justify-content-center align-items-center me-2"
                style={{ width: 33, height: 33 }}
              >
                <Image src={IC_Instagram} alt={IC_Instagram} width={18} />
              </a>
              <a
                href="#"
                className="rounded-circle bg-primary d-flex justify-content-center align-items-center me-2"
                style={{ width: 33, height: 33 }}
              >
                <Image src={IC_Twitter} alt={IC_Twitter} width={23} />
              </a>
              <a
                href="#"
                className="rounded-circle bg-primary d-flex justify-content-center align-items-center me-2"
                style={{ width: 33, height: 33 }}
              >
                <Image src={IC_Linkedin} alt={IC_Linkedin} width={23} />
              </a>
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
