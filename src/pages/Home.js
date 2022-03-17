import Facilities from "components/Facilities";
import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import HeroHome from "components/HeroHome.js";
import Solution from "components/Solution";

const Home = () => {
  return (
    <>
      <Header />
      <HeroHome />
      <Facilities />
      <Hero />
      <Solution />
      <Footer />
    </>
  );
};

export default Home;
