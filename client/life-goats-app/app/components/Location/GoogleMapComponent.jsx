'use client';

import Map, { Marker, Popup } from 'react-map-gl';
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import PropTypes from 'prop-types';
import { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxComponent = ({ locationData, zoom, width, widthMd, widthLg, widthXl, height, heightMd, heightLg, heightXl }) => {
  const [activeMarker, setActiveMarker] = useState(null);

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

  const mapStyles = {
    width: mapWidth,
    height: mapHeight,
  };

  return (
    <div className="rounded-2xl drop-shadow-xl overflow-hidden">
      <Map
        mapboxAccessToken="" // We'll use a free tile server instead
        initialViewState={{
          longitude: 22.502612,
          latitude: 40.102947,
          zoom: zoom
        }}
        style={mapStyles}
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json" // Free CartoDB basemap
        scrollZoom={false}
        doubleClickZoom={false}
        dragRotate={false}
        pitchWithRotate={false}
        touchZoomRotate={false}
      >
        {locationData.map((location) => (
          <Marker
            key={location.id}
            longitude={location.lng}
            latitude={location.lat}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setActiveMarker(activeMarker === location.id ? null : location.id);
            }}
          >
            <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:bg-red-600 transition-colors" />
          </Marker>
        ))}

        {locationData.map((location) => (
          activeMarker === location.id && (
            <Popup
              key={`popup-${location.id}`}
              longitude={location.lng}
              latitude={location.lat}
              anchor="top"
              onClose={() => setActiveMarker(null)}
              closeButton={true}
              closeOnClick={false}
            >
              <div className="p-3 max-w-xs">
                <h3 className="font-bold text-lg mb-2 font-subtitle text-primary">
                  {location.name}
                </h3>
                {location.image && (
                  <div className="mb-2">
                    <Image
                      src={location.image}
                      alt={location.alt || location.name}
                      width={200}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}
                {!isSmallScreen && (
                  <p className="font-body text-sm">{location.description}</p>
                )}
                {!isSmallScreen && location.extraDescription && (
                  <p className="font-body text-sm mt-1">{location.extraDescription}</p>
                )}
              </div>
            </Popup>
          )
        ))}
      </Map>
    </div>
  );
};

MapboxComponent.propTypes = {
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

export default MapboxComponent;