'use client';

import {
    Hero,
    Intro,
    Details,
    Location,
    Gallery,
    TheTeamOct2024
  } from "../../../components/Events";
  import {
    heroBackgroundOct24,
    aboutPhotoOct24
  } from "@/public/assets/index.js";
  import { introTextOct24 } from '../../../../data/intro';
  import { detailsOct24, detailsImagesOct24 } from "../../../../data/details";
  import { mountainLemos, mountainView } from "@/public/assets/index.js";
  import { locationDataMay24, locationDataInfoMay24 } from "../../../../data/location";
  import { mtOlympusOct2024Images } from '../../../../data/galleries/mt-olympus-oct-2024';
  import { useMediaQuery } from 'react-responsive';
  
  const LandingPage = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

    return (
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
        <Hero 
          isSmallScreen={isSmallScreen} 
          image={heroBackgroundOct24} 
          locationTitle="Mount Olympus" 
          date="Wed 2nd - Sat 5th October 2024"
          p1="A happy surprise!"
          p2="An unexpected opportunity to come together and spend some more time at the Plateau of the Muses once again."
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
        <Location 
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
        />
        <Gallery 
          isSmallScreen={isSmallScreen} 
          title="Our Memories"
          mainTitle="Gallery"
          imagesArray={mtOlympusOct2024Images}
        />
        {/* <TheTeamOct2024
          isSmallScreen={isSmallScreen} 
        /> */}
      </div>
    );
  };
  
  export default LandingPage;
  