'use client';

import { useEffect, useState } from "react";
import SimpleMapComponent from './MapboxComponent';
import "@/src/scss/components/Location/Map.scss";

const MapDisplay = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        style={{ width: props.width, height: props.height }} 
        className="map map--loading"
      >
        <span className="map__loading-text">Loading map...</span>
      </div>
    );
  }

  return <SimpleMapComponent {...props} />;
};

export default MapDisplay;