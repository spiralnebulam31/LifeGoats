import {
    Hero,
    Intro,
    EventOverview,
    Details,
    Location,
    Gallery,
    TheTeam
  } from "../../components/PastEvents/MtOlympusMay2024";
  import { TheHikeComponent } from "../../components/TheHike";
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
        <TheHikeComponent isSmallScreen={isSmallScreen} />
        <Gallery isSmallScreen={isSmallScreen} />
        <TheTeam isSmallScreen={isSmallScreen} />
      </div>
    );
  };
  
  export default LandingPage;
  