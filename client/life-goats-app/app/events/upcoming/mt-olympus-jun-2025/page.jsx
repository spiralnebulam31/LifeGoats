'use client';

import {
    Hero,
    // Intro,
    // Details,
    // Location,
    // Gallery,
    // TheTeamOct2024
  } from "../../../components/Events";
  import {
    heroBackgroundJun25,
    // aboutPhotoOct24
  } from "@/public/assets/index.js";
//   import { introTextOct24 } from '../../../../data/intro';
//   import { detailsOct24, detailsImagesOct24 } from "../../../../data/details";
//   import { mountainLemos, mountainView } from "@/public/assets/index.js";
//   import { locationDataMay24, locationDataInfoMay24 } from "../../../../data/location";
//   import { mtOlympusOct2024Images } from '../../../../data/galleries/mt-olympus-oct-2024';
  import { useMediaQuery } from 'react-responsive';
  
  const LandingPage = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

    return (
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
        <Hero 
          isSmallScreen={isSmallScreen} 
          image={heroBackgroundJun25} 
          locationTitle="Mount Olympus" 
          date="Fri 6th - Mon 9th June 2025"
          p1="Join us once again at the Land at the foot of Mount Olympus!"
          p2="More details about this retreat coming soon..."
          slider={false}
        />
        {/* <Intro
          isSmallScreen={isSmallScreen} 
          title="A brief summary of"
          mainTitle="The Retreat"
          image={aboutPhotoOct24}
          introText={introTextOct24}
        /> */}
        {/* <Details 
          isSmallScreen={isSmallScreen} 
          title="The retreat in brief"
          mainTitle="Details"
          details={detailsOct24}
          images={detailsImagesOct24}
          bgColor="gradient"
          titleColor="white"
        /> */}
        {/* <Location 
          isSmallScreen={isSmallScreen} 
          title="discover"
          mainTitle="The Location"
          image1={mountainLemos}
          image2={mountainView}
          imageAlt1="Lemos passage on Mount Olympus"
          imageAlt2="View from the Plateau of the Muses"
          locationData={locationDataMay24} // it's the same as the May 24 data
          locationDataInfo={locationDataInfoMay24} // it's the same as the May 24 data
          googleMapsLink="https://maps.app.goo.gl/RMdWS12Tge9Jnxot5"
        /> */}
        {/* <Gallery 
          isSmallScreen={isSmallScreen} 
          title="Our Memories"
          mainTitle="Gallery"
          imagesArray={mtOlympusOct2024Images}
        />
        <TheTeamOct2024
          isSmallScreen={isSmallScreen} 
        /> */}
      </div>
    );
  };
  
  export default LandingPage;
  