'use client';

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useEffect, useState } from "react";

// Dynamically import Leaflet only on client-side
const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

const MapDisplay = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <LeafletMap {...props} />;
};

export default MapDisplay;