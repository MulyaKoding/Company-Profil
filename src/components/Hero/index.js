import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Home from "assets/images/home.png";

const Hero = () => {
  return (
    <section className="my-5">
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center mb-4 mb-md-0">
            <div>
              <h1 className="text-primary h2 fw-bold mb-4">PT. PERMATA AZZURI SEHAT</h1>
              <p className="text-primary mb-4 fs-5">
                Kami Perusahaan start-up cloud healthcare. Kami membantu klient kami melakukan
                peningkatan kinerja yang langgeng dan mewujudkan tujuan terpenting mereka melalui
                aplikasi dan solusi bisnis terbaik
              </p>

              <div className="d-flex">
                <Button variant="primary rounded-lg me-3 fs-5">Get Started</Button>
                <Button variant="outline-primary fs-5">Contact Us</Button>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <Image src={Home} alt={Home} style={{ maxHeight: 300 }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
