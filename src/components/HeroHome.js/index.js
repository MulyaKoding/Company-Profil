import { Button, Container } from "react-bootstrap";

const HeroHome = () => {
  return (
    <section className="herohome__bg d-flex align-items-center">
      <Container>
        <div>
          <h1 className="h2 fw-bold text-light mb-4" style={{ width: 200 }}>
            PERMATA AZZURI SEHAT
          </h1>
          <p className="text-light" style={{ width: 300 }}>
            Produk berbasis cloud health-care yang membantu anda membangun pelayanan kesehatan
            terbaik. Mulai perjalananmu dengan kami sekarang
          </p>
          <div className="mt-5">
            <Button variant="primary" className="me-3">
              Get Started
            </Button>
            <Button variant="light" className="text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroHome;
