import { Card, Col, Container, Image, Row } from "react-bootstrap";

import IC_Klinkpratama from "assets/images/ic_klinikpratama.png";
import IC_Klinkgigi from "assets/images/ic_klinikgigi.png";
import IC_Klinikutama from "assets/images/ic_klinikutama.png";
import IC_Klinikradiologi from "assets/images/ic_klinikradiologi.png";
import IC_Klinikhospital from "assets/images/ic_klinikhospital.png";
import IC_Klinikswasta from "assets/images/ic_klinikswasta.png";

const Features = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#E8EEEE" }}>
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <Card className="rounded-3 shadow" style={{ minHeight: 250 }}>
              <Card.Body style={{ padding: "30px 50px" }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle shadow p-3 me-3">
                    <Image src={IC_Klinkpratama} alt={IC_Klinkpratama} width={20} />
                  </div>
                  <h2 className="h5 fw-bold text-primary mb-0">Klinik Pratama</h2>
                </div>
                <p className="text-muted">klinik yang menyelenggarakan pelayanan medik dasar</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="rounded-3 shadow" style={{ minHeight: 250 }}>
              <Card.Body style={{ padding: "30px 50px" }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle shadow p-3 me-3">
                    <Image src={IC_Klinkgigi} alt={IC_Klinkgigi} width={20} />
                  </div>
                  <h2 className="h5 fw-bold text-primary mb-0">Klinik Gigi</h2>
                </div>
                <p className="text-muted">
                  tempat bagi pasien untuk mendapatkan perawatan gigi dan mulut.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="rounded-3 shadow" style={{ minHeight: 250 }}>
              <Card.Body style={{ padding: "30px 50px" }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle shadow p-3 me-3">
                    <Image src={IC_Klinikutama} alt={IC_Klinikutama} width={20} />
                  </div>
                  <h2 className="h5 fw-bold text-primary mb-0">Klinik Utama</h2>
                </div>
                <p className="text-muted">
                  klinik yang menyelenggarakan pelayanan medik spesialistik atau pelayanan medik
                  dasar dan spesialistik.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="rounded-3 shadow" style={{ minHeight: 250 }}>
              <Card.Body style={{ padding: "30px 50px" }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle shadow p-3 me-3">
                    <Image src={IC_Klinikradiologi} alt={IC_Klinikradiologi} width={20} />
                  </div>
                  <h2 className="h5 fw-bold text-primary mb-0">Klinik Radiologi</h2>
                </div>
                <p className="text-muted">
                  memberikan perawatan komprehensif bagi pasien dari segala usia.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="rounded-3 shadow" style={{ minHeight: 250 }}>
              <Card.Body style={{ padding: "30px 50px" }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle shadow p-3 me-3">
                    <Image src={IC_Klinikhospital} alt={IC_Klinikhospital} width={20} />
                  </div>
                  <h2 className="h5 fw-bold text-primary mb-0">Hospital</h2>
                </div>
                <p className="text-muted">
                  Rumah Sakit berbagai jenis spesialis dokter yang menangani perawatan pasien.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="rounded-3 shadow" style={{ minHeight: 250 }}>
              <Card.Body style={{ padding: "30px 50px" }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle shadow p-3 me-3">
                    <Image src={IC_Klinikswasta} alt={IC_Klinikswasta} width={20} />
                  </div>
                  <h2 className="h5 fw-bold text-primary mb-0">Klinik Swasta</h2>
                </div>
                <p className="text-muted">
                  Klinik yang dimiliki oleh dokter yang membangun sebuah tempat pengobatan secara
                  individual
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
