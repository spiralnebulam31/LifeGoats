'use client';

import {
    Hero,
    Intro,
    Details,
    Altimeter,
    Gallery,
  } from "../../../components/Events";
  import {
    heroBackgroundJun25,
    aboutPhotoJun25
  } from "@/src/assets/index.js";
  import { introTextJun25 } from '../../../../data/intro';
  import { detailsJun25, detailsImagesJun25 } from "../../../../data/details";
  import { mtOlympusJun2025Images } from '../../../../data/galleries/mt-olympus-jun-2025';
  import { getRouteData } from '../../../../data/altimeter';
  import { useMediaQuery } from 'react-responsive';
  
  const LandingPage = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
    
    // Get route data
    const ascentData = getRouteData('prioniaToAgapitosCircular');
    const descentData = getRouteData('agiosKonstantinosToOrliasCircular');

    return (
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden mb-[180px]">
        <Hero 
          isSmallScreen={isSmallScreen} 
          image={heroBackgroundJun25} 
          locationTitle="Mount Olympus" 
          date="Fri 6th - Mon 9th June 2025"
          p1="Breathtaking views during hikes on Mount Olympus, refreshing dips into the crystal-clear waters of Enipeas river and warm cozy moments of connection at the Land of the Foot of the Mountain."
          p2="More details about what happened in this retreat coming soon!"
          slider={false}
        />
        <Intro
          isSmallScreen={isSmallScreen} 
          title="A brief summary of"
          mainTitle="The Retreat"
          image={aboutPhotoJun25}
          introText={introTextJun25}
        />
        <Details 
          isSmallScreen={isSmallScreen} 
          title="The retreat in brief"
          mainTitle="Details"
          details={detailsJun25}
          images={detailsImagesJun25}
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
          imagesArray={mtOlympusJun2025Images}
        />
      </div>
    );
  };
  
  export default LandingPage;