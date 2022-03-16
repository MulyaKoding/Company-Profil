import { Col, Container, Image, Row } from "react-bootstrap";

import LogoVisiMisi from "assets/images/visimisi.png";

const VisiMisi = () => {
  return (
    <section className="my-5" style={{ backgroundColor: "#E8EEEE", padding: "50px 0" }}>
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Image src={LogoVisiMisi} alt={LogoVisiMisi} className="hero__img mb-5 mb-md-0" />
          </Col>
          <Col md={6}>
            <div>
              <div className="mb-5">
                <h2 className="h3 text-primary mb-3">Visi</h2>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet, adasini consectetur adipiscing elit. Vivamus finibus
                  dictum elit. Nullam barufasil commodo diam ut lectus dictum, it dapibus tortor
                  porta.
                </p>
              </div>
              <hr className="opacity-75 border border-1 border-primary" />
              <div className="mt-5">
                <h2 className="h3 text-primary mb-3">Misi</h2>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet, adasini consectetur adipiscing elit. Vivamus finibus
                  dictum elit. Nullam barufasil commodo diam ut lectus dictum, it dapibus tortor
                  porta.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VisiMisi;
