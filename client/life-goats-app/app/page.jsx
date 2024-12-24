import PropTypes from 'prop-types';
import {
  Hero,
  Intro,
  Testimonials,
  CoreValues,
  Parallax,
  Contact,
} from "./components/LandingPage";

const LandingPage = ({
  phoneIsHovered,
  handlePhoneMouseEnter,
  handlePhoneMouseLeave,
  emailIsHovered,
  handleEmailMouseEnter,
  handleEmailMouseLeave,
  email2IsHovered,
  handleEmail2MouseEnter,
  handleEmail2MouseLeave,
  isSmallScreen,
}) => {
  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
      <Hero isSmallScreen={isSmallScreen} />
      <Intro isSmallScreen={isSmallScreen} />
      <Testimonials isSmallScreen={isSmallScreen} />
      <CoreValues isSmallScreen={isSmallScreen} />
      <Parallax />
      <Contact
        isSmallScreen={isSmallScreen}
        emailIsHovered={emailIsHovered}
        handleEmailMouseEnter={handleEmailMouseEnter}
        handleEmailMouseLeave={handleEmailMouseLeave}
        phoneIsHovered={phoneIsHovered}
        handlePhoneMouseEnter={handlePhoneMouseEnter}
        handlePhoneMouseLeave={handlePhoneMouseLeave}
        email2IsHovered={email2IsHovered}
        handleEmail2MouseEnter={handleEmail2MouseEnter}
        handleEmail2MouseLeave={handleEmail2MouseLeave}
      />
    </div>
  );
};

LandingPage.propTypes = {
  phoneIsHovered: PropTypes.bool.isRequired,
  handlePhoneMouseEnter: PropTypes.func.isRequired,
  handlePhoneMouseLeave: PropTypes.func.isRequired,
  emailIsHovered: PropTypes.bool.isRequired,
  handleEmailMouseEnter: PropTypes.func.isRequired,
  handleEmailMouseLeave: PropTypes.func.isRequired,
  email2IsHovered: PropTypes.bool.isRequired,
  handleEmail2MouseEnter: PropTypes.func.isRequired,
  handleEmail2MouseLeave: PropTypes.func.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
};

export default LandingPage;
