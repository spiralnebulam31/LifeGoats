'use client';

import { useMediaQuery } from "react-responsive";
import PropTypes from 'prop-types';

const SimpleMapComponent = ({ locationData, zoom, width, widthMd, widthLg, widthXl, height, heightMd, heightLg, heightXl }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1024px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px) and (max-width: 1440px)" });
  const isExtraLargeScreen = useMediaQuery({ query: "(min-width: 1441px)" });

  let mapWidth = width;
  let mapHeight = height;

  if (isSmallScreen) {
    mapWidth = width;
    mapHeight = height;
  } else if (isMediumScreen) {
    mapWidth = widthMd;
    mapHeight = heightMd;
  } else if (isLargeScreen) {
    mapWidth = widthLg;
    mapHeight = heightLg;
  } else if (isExtraLargeScreen) {
    mapWidth = widthXl;
    mapHeight = heightXl;
  }

  // Get the first location for centering the map
  const centerLat = locationData[0]?.lat || 40.102947;
  const centerLng = locationData[0]?.lng || 22.502612;
  
  // Create markers parameter for OpenStreetMap
  const markersParam = locationData.map(location => 
    `${location.lat},${location.lng}`
  ).join('|');

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${centerLng-0.1},${centerLat-0.1},${centerLng+0.1},${centerLat+0.1}&layer=mapnik&marker=${centerLat},${centerLng}`;

  return (
    <div className="rounded-2xl drop-shadow-xl overflow-hidden bg-gray-100">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ 
          width: mapWidth, 
          height: mapHeight,
          border: 'none',
          minHeight: '300px'
        }}
        title="Location Map"
        loading="lazy"
      />
      
      {/* Location info below map */}
      <div className="p-4 bg-white">
        <div className="space-y-2">
          {locationData.map((location) => (
            <div key={location.id} className="pl-3">
              <h4 className="font-bold text-md font-subtitle text-primary">
                {location.name}
              </h4>
              <p className="font-body text-sm text-gray-600">
                Coordinates: {location.lat}, {location.lng}
              </p>
              {!isSmallScreen && location.description && (
                <p className="font-body text-sm mt-1">{location.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SimpleMapComponent.propTypes = {
  locationData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      image: PropTypes.string,
      alt: PropTypes.string,
      description: PropTypes.string,
      extraDescription: PropTypes.string,
    })
  ).isRequired,
  zoom: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  widthMd: PropTypes.string.isRequired,
  widthLg: PropTypes.string.isRequired,
  widthXl: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  heightMd: PropTypes.string.isRequired,
  heightLg: PropTypes.string.isRequired,
  heightXl: PropTypes.string.isRequired,
};

export default SimpleMapComponent;