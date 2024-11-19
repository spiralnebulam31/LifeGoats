import {
  Hero,
  Intro,
  Testimonials,
  CoreValues,
  Parallax,
  Contact,
} from "../components/LandingPage";

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

export default LandingPage;
