import {
    Hero,
    Intro,
    EventOverview,
    Details,
    Location,
    // Program,
    // Pricing,
    // Parallax,
    // Contact,
  } from "../components/PastEvents/MtOlympusMay2024";
//   import { useState } from "react";
  import MediaQuery from "react-responsive";
  
  const LandingPage = () => {
    const isSmallScreen = MediaQuery({ query: "(max-width: 768px)" });
  
    // const [phoneIsHovered, setPhoneIsHovered] = useState(false);
    // const [emailIsHovered, setEmailIsHovered] = useState(false);
  
    // const handlePhoneMouseEnter = () => {
    //   setPhoneIsHovered(true);
    // };
  
    // const handlePhoneMouseLeave = () => {
    //   setPhoneIsHovered(false);
    // };
  
    // const handleEmailMouseEnter = () => {
    //   setEmailIsHovered(true);
    // };
  
    // const handleEmailMouseLeave = () => {
    //   setEmailIsHovered(false);
    // };
  
    return (
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
        <Hero isSmallScreen={isSmallScreen} />
        <Intro isSmallScreen={isSmallScreen} />
        <EventOverview isSmallScreen={isSmallScreen} />
        <Details isSmallScreen={isSmallScreen} />
        <Location isSmallScreen={isSmallScreen} />
        {/* <Program isSmallScreen={isSmallScreen} />
        <Pricing isSmallScreen={isSmallScreen} />
        <Parallax />
        <Contact
          isSmallScreen={isSmallScreen}
          emailIsHovered={emailIsHovered}
          handleEmailMouseEnter={handleEmailMouseEnter}
          handleEmailMouseLeave={handleEmailMouseLeave}
          phoneIsHovered={phoneIsHovered}
          handlePhoneMouseEnter={handlePhoneMouseEnter}
          handlePhoneMouseLeave={handlePhoneMouseLeave}
        /> */}
      </div>
    );
  };
  
  export default LandingPage;
  