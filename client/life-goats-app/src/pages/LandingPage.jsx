import {
  Hero,
  Intro,
  Testimonials,
  CoreValues,
  Parallax,
  Contact,
} from "../components/LandingPage";
import { useState } from "react";

const LandingPage = ( {isSmallScreen} ) => {

  const [phoneIsHovered, setPhoneIsHovered] = useState(false);
  const [emailIsHovered, setEmailIsHovered] = useState(false);

  const handlePhoneMouseEnter = () => {
    setPhoneIsHovered(true);
  };

  const handlePhoneMouseLeave = () => {
    setPhoneIsHovered(false);
  };

  const handleEmailMouseEnter = () => {
    setEmailIsHovered(true);
  };

  const handleEmailMouseLeave = () => {
    setEmailIsHovered(false);
  };

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
      />
    </div>
  );
};

export default LandingPage;
