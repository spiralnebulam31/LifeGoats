'use client';

import { useEffect, useState } from "react";
import MapboxComponent from './GoogleMapComponent'; // Reusing the same file

const MapDisplay = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        style={{ width: props.width, height: props.height }} 
        className="bg-gray-200 rounded-2xl drop-shadow-xl flex items-center justify-center"
      >
        <span className="text-gray-500">Loading map...</span>
      </div>
    );
  }

  return <MapboxComponent {...props} />;
};

export default MapDisplay;