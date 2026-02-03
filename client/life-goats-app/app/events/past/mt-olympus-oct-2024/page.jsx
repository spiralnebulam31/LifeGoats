'use client';

import {
    Hero,
    Intro,
    Details,
    Altimeter,
    Gallery,
  } from "../../../components/Events";
  import {
    heroBackgroundOct24,
    aboutPhotoOct24
  } from "@/public/assets/index.js";
  import { introTextOct24 } from '../../../../data/intro';
  import { detailsOct24, detailsImagesOct24 } from "../../../../data/details";
  import { mtOlympusOct2024Images } from '../../../../data/galleries/mt-olympus-oct-2024';
  import { getRouteData } from '../../../../data/altimeter';
  import { useMediaQuery } from 'react-responsive';
  
  const LandingPage = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
    
    // Get route data
    const ascentData = getRouteData('gortsiaToMusesPlateau', 'ascent');
    const descentData = getRouteData('gortsiaToMusesPlateau', 'descent');

    return (
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden mb-[180px]">
        <Hero 
          isSmallScreen={isSmallScreen} 
          image={heroBackgroundOct24}
          locationTitle="Mount Olympus" 
          date="Wed 2nd - Sat 5th October 2024"
          p1="A happy surprise!"
          p2="An unexpected opportunity to come together and spend some more time at the Plateau of the Muses once again."
          slider={true}
        />
        <Intro
          isSmallScreen={isSmallScreen} 
          title="A brief summary of"
          mainTitle="The Retreat"
          image={aboutPhotoOct24}
          introText={introTextOct24}
        />
        <Details 
          isSmallScreen={isSmallScreen} 
          title="The retreat in brief"
          mainTitle="Details"
          details={detailsOct24}
          images={detailsImagesOct24}
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
          imagesArray={mtOlympusOct2024Images}
        />
      </div>
    );
  };
  
  export default LandingPage;