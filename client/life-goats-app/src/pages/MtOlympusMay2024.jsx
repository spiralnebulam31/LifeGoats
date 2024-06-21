import {
    Hero,
    Intro,
    EventOverview,
    Details,
    Location,
    TheHikeComponent as TheHike,
  } from "../components/PastEvents/MtOlympusMay2024";
  import MediaQuery from "react-responsive";
  
  const LandingPage = () => {
    const isSmallScreen = MediaQuery({ query: "(max-width: 768px)" });

    return (
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
        <Hero isSmallScreen={isSmallScreen} />
        <Intro isSmallScreen={isSmallScreen} />
        <EventOverview isSmallScreen={isSmallScreen} />
        <Details isSmallScreen={isSmallScreen} />
        <Location isSmallScreen={isSmallScreen} />
        <TheHike isSmallScreen={isSmallScreen} />
      </div>
    );
  };
  
  export default LandingPage;
  