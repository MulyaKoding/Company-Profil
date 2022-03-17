import { Card, Col, Container, Image, Row } from "react-bootstrap";

import IC_Support from "assets/images/ic_freesupport_green.png";
import IC_Easyaccess from "assets/images/ic_easyaccess_green.png";
import IC_Onlinecare from "assets/images/ic_onlinecare_green.png";

const Facilities = () => {
  return (
    <section className="bg-light" style={{ margin: "100px 0" }}>
      <Container>
        <Row>
          <Col md={4} className="d-flex justify-content-center">
            <Card
              className="border border-primary text-center"
              style={{ borderRadius: 20, width: 300, height: 200 }}
            >
              <Card.Body className="d-flex justify-content-center align-items-center">
                <div>
                  <Image src={IC_Support} alt={IC_Support} width={50} />
                  <div className="text-primary mt-3">Free Support</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card
              className="border border-primary text-center"
              style={{ borderRadius: 20, width: 300, height: 200 }}
            >
              <Card.Body className="d-flex justify-content-center align-items-center">
                <div>
                  <Image src={IC_Easyaccess} alt={IC_Easyaccess} width={50} />
                  <div className="text-primary mt-3">Easy Access</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card
              className="border border-primary text-center"
              style={{ borderRadius: 20, width: 300, height: 200 }}
            >
              <Card.Body className="d-flex justify-content-center align-items-center">
                <div>
                  <Image src={IC_Onlinecare} alt={IC_Onlinecare} width={50} />
                  <div className="text-primary mt-3">Online Care</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Facilities;
