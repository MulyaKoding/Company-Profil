import { Col, Container, Image, Row } from "react-bootstrap";

import Products from "assets/images/products.png";

const HeroProducts = () => {
  return (
    <section className="my-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="text-center mb-4 mb-md-0">
              <Image src={Products} alt={Products} className="hero__img" />
            </div>
          </Col>
          <Col md={6}>
            <h1 className="h2 text-primary fw-bold mb-4">PRODUCTS</h1>

            <h2 className="h3 text-primary fw-bold mb-4"> KLINIKME</h2>

            <p className="text-muted fs-5">
              Kami Perusahaan start-up cloud healthcare. Kami membantu klient kami melakukan
              peningkatan kinerja yang langgeng dan mewujudkan tujuan terpenting mereka melalui
              aplikasi dan solusi bisnis terbaik
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroProducts;
