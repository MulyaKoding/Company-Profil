import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import Solution from "components/Solution";
import Videotron from "components/Videotron";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Videotron />
      <Hero />
      <Solution />
      <div style={{ marginTop: 150 }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
