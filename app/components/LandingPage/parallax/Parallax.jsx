import { lifeGoatsWalkingMountain } from "@/src/assets/index.js";
import "@/src/scss/components/LandingPage/parallax/Parallax.scss";

const Parallax = () => {
  const sectionStyle = {
    backgroundImage: `url('${lifeGoatsWalkingMountain.src}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <section id="parallax" style={sectionStyle} className="parallax">
      <div className="parallax__inner">
        <div className="parallax__overlay">
          <h1 className="parallax__quote">
          “Give the ones you love wings to fly, roots to come back and reasons to stay.”
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Parallax;