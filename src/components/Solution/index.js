import {
  // Col,
  Container,
  Image,
  // Row,
} from "react-bootstrap";

import Hospital from "assets/images/hospital.png";
// import IC_Support from "assets/images/ic_support.png";
// import Ic_Easyaccess from "assets/images/ic_easyaccess.png";
// import IC_Onlinecare from "assets/images/ic_onlinecare.png";

const Solution = () => {
  return (
    <section className="my-5 py-5 position-relative" style={{ backgroundColor: "#E8EEEE" }}>
      <Container>
        <h1 className="h3 fw-bold text-center text-primary pb-3 pb-md-5">
          SOLUTION TO YOUR HEALTH CARE
        </h1>
        <div className="text-center pt-5">
          <Image src={Hospital} alt={Hospital} style={{ maxHeight: 300, maxWidth: "100%" }} />
        </div>
        {/* <div className="d-flex justify-content-center">
          <Row className="bg-primary py-4 position-absolute w-75 rounded-3" style={{ bottom: -70 }}>
            <Col md={4} className="text-center mb-4 mb-md-0">
              <Image src={IC_Support} alt={IC_Support} width={60} />
              <div className="text-light fs-5 mt-3">Free Support</div>
            </Col>
            <Col md={4} className="text-center mb-4 mb-md-0">
              <Image src={Ic_Easyaccess} alt={Ic_Easyaccess} width={60} />
              <div className="text-light fs-5 mt-3">Easy Access</div>
            </Col>
            <Col md={4} className="text-center mb-4 mb-md-0">
              <Image src={IC_Onlinecare} alt={IC_Onlinecare} width={60} />
              <div className="text-light fs-5 mt-3">Online Care</div>
            </Col>
          </Row>
        </div> */}
      </Container>
    </section>
  );
};

export default Solution;
