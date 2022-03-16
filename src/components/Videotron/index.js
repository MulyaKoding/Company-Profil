import EarthVideotron from "assets/video/earth_videotron.mp4";

const Videotron = () => {
  return (
    <section className="overflow-hidden" style={{ maxHeight: 400 }}>
      <video src={EarthVideotron} width="100%" autoPlay loop muted />
    </section>
  );
};

export default Videotron;
