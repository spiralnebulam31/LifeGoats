'use client';

import {
    Hero,
    Intro,
    Details,
    Altimeter,
    Gallery,
  } from "../../../components/Events";
  import {
    heroBackgroundOct25,
    aboutPhotoOct25
  } from "@/public/assets/index.js";
  import { introTextOct25 } from '../../../../data/intro';
  import { detailsOct25, detailsImagesOct25 } from "../../../../data/details";
  import { mtOlympusOct2025Images } from '../../../../data/galleries/mt-olympus-oct-2025';
  import { getRouteData } from '../../../../data/altimeter';
  import { useMediaQuery } from 'react-responsive';
  
  const LandingPage = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
    
    // Get route data
    const ascentData = getRouteData('gortsiaToAgapitosViaStragos');
    const descentData = getRouteData('agapitosToAgiosDionysiosViaPrionia');

    return (
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden mb-[180px]">
        <Hero 
          isSmallScreen={isSmallScreen} 
          image={heroBackgroundOct25}
          locationTitle="Mount Olympus" 
          date="Fri 24th - Tue 28th October 2025"
          p1="A happy surprise!"
          p2="An unexpected opportunity to come together and spend some more time at the Plateau of the Muses once again."
          slider={true}
        />
        <Intro
          isSmallScreen={isSmallScreen} 
          title="A brief summary of"
          mainTitle="The Retreat"
          image={aboutPhotoOct25}
          introText={introTextOct25}
        />
        <Details 
          isSmallScreen={isSmallScreen} 
          title="The retreat in brief"
          mainTitle="Details"
          details={detailsOct25}
          images={detailsImagesOct25}
          bgColor="gradient"
          titleColor="white"
        />
        <Altimeter 
          ascentData={ascentData}
          descentData={descentData}
          showBoth={true}
        />
        <Gallery 
          isSmallScreen={isSmallScreen}
          title="Our Memories"
          mainTitle="Gallery"
          imagesArray={mtOlympusOct2025Images}
        />
      </div>
    );
  };
  
  export default LandingPage;