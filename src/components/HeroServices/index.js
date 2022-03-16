import { Col, Container, Image, Row } from "react-bootstrap";
import LogoServices from "assets/images/services.png";
import IC_Health from "assets/images/ic_health.png";
import IC_Technology from "assets/images/ic_technology.png";
import IC_Business from "assets/images/ic_business.png";

const HeroServices = () => {
  return (
    <section className="hero__section my-5 position-relative">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-5 mb-md-0">
            <Image src={LogoServices} alt={LogoServices} className="hero__img" />
          </Col>
          <Col md={6}>
            <h1 className="h4 fw-bold text-primary mb-4">SERVICES</h1>
            <p className="text-muted fs-5">
              Kami Perusahaan start-up cloud healthcare. Kami membantu klient kami melakukan
              peningkatan kinerja yang langgeng dan mewujudkan tujuan terpenting mereka melalui
              aplikasi dan solusi bisnis terbaik
            </p>
          </Col>
        </Row>

        <div className="d-flex justify-content-center mt-5">
          <Row className="bg-primary py-4 position-absolute w-75 rounded-3">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <Image src={IC_Health} alt={IC_Health} width={60} />
              <div className="text-light fs-5 mt-3">Health</div>
            </Col>
            <Col md={4} className="hero__middle-border text-center mb-4 mb-md-0">
              <Image src={IC_Technology} alt={IC_Technology} width={60} />
              <div className="text-light fs-5 mt-3">Technology</div>
            </Col>
            <Col md={4} className="text-center mb-4 mb-md-0">
              <Image src={IC_Business} alt={IC_Business} width={60} />
              <div className="text-light fs-5 mt-3">Business</div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HeroServices;
