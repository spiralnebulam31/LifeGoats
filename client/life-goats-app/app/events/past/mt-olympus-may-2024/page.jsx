'use client';

import {
    Hero,
    Intro,
    EventOverview,
    Details,
    Altimeter,
    Gallery,
    TheTeamMay2024
  } from "../../../components/Events";
  import {
    heroBackgroundMay24,
    aboutPhotoMay24
  } from "@/src/assets/index.js";
  import { introTextMay24 } from '../../../../data/intro';
  import { overviewDataMay24 } from "../../../../data/overview";
  import { detailsMay24, detailsImagesMay24 } from "../../../../data/details";
  import { mtOlympusMay2024Images } from '../../../../data/galleries/mt-olympus-may-2024';
  import { getRouteData } from '../../../../data/altimeter';
  import { useMediaQuery } from 'react-responsive';
  
  const LandingPage = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
    
    // Get route data
    const ascentData = getRouteData('gortsiaToMusesPlateau', 'ascent');
    const descentData = getRouteData('gortsiaToMusesPlateau', 'descent');

    return (
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
        <Hero 
          isSmallScreen={isSmallScreen} 
          image={heroBackgroundMay24}
          locationTitle="Mount Olympus" 
          date="Tue 28th - Fri 31st May 2024"
          p1="A collaborative retreat for coaches, therapists, carers, educators and other
              people centered professionals."
          p2="A retreat from us, for us."
          slider={true}
        />
        <Intro
          isSmallScreen={isSmallScreen} 
          title="The host&apos;s reflections"
          mainTitle="About The Retreat"
          image={aboutPhotoMay24}
          introText={introTextMay24}
        />
        <EventOverview
          isSmallScreen={isSmallScreen}
          title="A retreat from us, for us."
          mainTitle="What to expect"
          overviewData={overviewDataMay24}
        />
        <Details 
          isSmallScreen={isSmallScreen} 
          title="The retreat in brief"
          mainTitle="Details"
          details={detailsMay24}
          images={detailsImagesMay24}
          bgColor="plain"
          titleColor="blue"
        />
        <Altimeter 
          ascentData={ascentData}
          descentData={descentData}
          showBoth={true}
          showTotals={true}
        />
        <Gallery 
          isSmallScreen={isSmallScreen} 
          title="Our Memories"
          mainTitle="Gallery"
          imagesArray={mtOlympusMay2024Images}
        />
        <TheTeamMay2024
          isSmallScreen={isSmallScreen} 
        />
      </div>
    );
  };
  
  export default LandingPage;