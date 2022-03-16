import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import Solution from "components/Solution";
import Videotron from "components/Videotron";

const Home = () => {
  return (
    <>
      <Header />
      <Videotron />
      <Hero />
      <Solution />
      <div style={{ marginTop: 150 }}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
