'use client';

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { mapPin, pinShadow } from "@/public/assets/index.js";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useEffect, useState } from "react";

// Dynamically import react-leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const MapDisplay = ( { locationData, zoom, width, widthMd, widthLg, widthXl, height, heightMd, heightLg, heightXl } ) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1024px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px) and (max-width: 1440px)" });
  const isExtraLargeScreen = useMediaQuery({ query: "(min-width: 1441px)" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure component renders only on the client
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  let mapWidth = width;
  let mapHeight = height;

  if (isMediumScreen) {
    mapWidth = widthMd;
    mapHeight = heightMd;
  } else if (isLargeScreen) {
    mapWidth = widthLg;
    mapHeight = heightLg;
  } else if (isExtraLargeScreen) {
    mapWidth = widthXl;
    mapHeight = heightXl;
  }

  return (
    <div>
      <MapContainer
        key="unique-map-key" // Add a unique key to force remount
        attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        center={[40.102947, 22.502612]}
        zoom={zoom}
        scrollWheelZoom={false}
        className="z-0 object-contain rounded-2xl drop-shadow-xl"
        style={{ width: mapWidth, height: mapHeight }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locationData.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={L.icon({
              iconUrl: mapPin.src,
              iconSize: [40, 40],
              iconAnchor: [20, 40],
              popupAnchor: [0, -40],
              shadowUrl: pinShadow.src,
              shadowSize: [40, 40],
              shadowAnchor: [20, 40],
            })}
          >
            <Popup>
              <h2 className="font-links font-bold text-lg">{location.name}</h2>
              <p className="font-body">
                ({location.lat}, {location.lng})
              </p>
              {location.image && (
              <Image
                src={location.image}
                alt={location.alt}
                className="object-cover rounded-2xl"
                width={200}
                height={200}
              />
              )}
              {!isSmallScreen && (
                <p className="font-body">{location.description}</p>
              )}
              {!isSmallScreen && location.extraDescription && (
                <p className="font-body">{location.extraDescription}</p>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
