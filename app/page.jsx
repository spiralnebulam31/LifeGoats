import PropTypes from 'prop-types';
import "@/src/scss/pages/Landing.scss";
import {
  Hero,
  Intro,
  // Testimonials,
  CoreValues,
  Parallax,
  Contact,
} from "./components/LandingPage";

const LandingPage = ({
  isSmallScreen,
}) => {
  return (
    <div className="landing">
      <Hero isSmallScreen={isSmallScreen} />
      <Intro isSmallScreen={isSmallScreen} />
      {/* <Testimonials isSmallScreen={isSmallScreen} /> */}
      <CoreValues isSmallScreen={isSmallScreen} />
      <Parallax />
      <Contact
        isSmallScreen={isSmallScreen}
      />
    </div>
  );
};

LandingPage.propTypes = {
  isSmallScreen: PropTypes.bool
};

export default LandingPage;
