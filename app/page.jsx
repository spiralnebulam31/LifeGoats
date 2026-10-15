import PropTypes from 'prop-types';
import {
  Hero,
  Intro,
  // Testimonials,
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
  instagramIconIsHovered,
  handleInstagramIconMouseEnter,
  handleInstagramIconMouseLeave,
  isSmallScreen,
}) => {
  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
      <Hero isSmallScreen={isSmallScreen} />
      <Intro isSmallScreen={isSmallScreen} />
      {/* <Testimonials isSmallScreen={isSmallScreen} /> */}
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
        instagramIconIsHovered={instagramIconIsHovered}
        handleInstagramIconMouseEnter={handleInstagramIconMouseEnter}
        handleInstagramIconMouseLeave={handleInstagramIconMouseLeave}
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

LandingPage.propTypes = {
  phoneIsHovered: PropTypes.bool,
  handlePhoneMouseEnter: PropTypes.func,
  handlePhoneMouseLeave: PropTypes.func,
  emailIsHovered: PropTypes.bool,
  handleEmailMouseEnter: PropTypes.func,
  handleEmailMouseLeave: PropTypes.func,
  email2IsHovered: PropTypes.bool,
  handleEmail2MouseEnter: PropTypes.func,
  handleEmail2MouseLeave: PropTypes.func,
  instagramIconIsHovered: PropTypes.bool,
  handleInstagramIconMouseEnter: PropTypes.func,
  handleInstagramIconMouseLeave: PropTypes.func,
  isSmallScreen: PropTypes.bool
};

export default LandingPage;
