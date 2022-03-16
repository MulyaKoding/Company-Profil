import { Container, Image } from "react-bootstrap";
import IC_Health from "assets/images/ic_health_green.png";
import IC_Technology from "assets/images/ic_technology_green.png";
import IC_Business from "assets/images/ic_business_green.png";

const Information = () => {
  return (
    <section className="information__section mb-5" style={{ backgroundColor: "#E8EEEE" }}>
      <Container className="py-4">
        <div className="d-flex align-items-center mb-3">
          <Image src={IC_Health} alt={IC_Health} height={40} />
          <h2 className="h4 fw-bold text-primary ms-2 mb-0">Health</h2>
        </div>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus dictum elit.
          Nullam commodo diam ut lectus dictum, ac dapibus tortor porta. Sed sit ametasel anse
          lectus tellus. Phasellus quis volutpat arcu. Cras veli placerat nunc. Aenean euismod eros
          eu sodales haseni tempor. Vestibulum malesuada feugiat tristique. Ande Vivamus venenatis
          maximus elit vel consequat.
        </p>
      </Container>
      <hr className="opacity-75 border border-2 border-primary" />
      <Container className="py-4">
        <div className="d-flex align-items-center mb-3">
          <Image src={IC_Technology} alt={IC_Technology} height={40} />
          <h2 className="h4 fw-bold text-primary ms-2 mb-0">Technology</h2>
        </div>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus dictum elit.
          Nullam commodo diam ut lectus dictum, ac dapibus tortor porta. Sed sit ametasel anse
          lectus tellus. Phasellus quis volutpat arcu. Cras veli placerat nunc. Aenean euismod eros
          eu sodales haseni tempor. Vestibulum malesuada feugiat tristique. Ande Vivamus venenatis
          maximus elit vel consequat.
        </p>
      </Container>
      <hr className="opacity-75 border border-2 border-primary" />
      <Container className="py-4">
        <div className="d-flex align-items-center mb-3">
          <Image src={IC_Business} alt={IC_Business} height={40} />
          <h2 className="h4 fw-bold text-primary ms-2 mb-0">Business</h2>
        </div>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus dictum elit.
          Nullam commodo diam ut lectus dictum, ac dapibus tortor porta. Sed sit ametasel anse
          lectus tellus. Phasellus quis volutpat arcu. Cras veli placerat nunc. Aenean euismod eros
          eu sodales haseni tempor. Vestibulum malesuada feugiat tristique. Ande Vivamus venenatis
          maximus elit vel consequat.
        </p>
      </Container>
    </section>
  );
};

export default Information;
