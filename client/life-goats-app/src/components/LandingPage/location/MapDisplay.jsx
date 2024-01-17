import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { locationData } from "../../../constants/location";
import { mapPin, pinShadow } from "../../../assets/index.js";
import { useMediaQuery } from "react-responsive";

const MapDisplay = () => {

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const customMarker = new L.icon({
    iconUrl: mapPin,
    shadowUrl: pinShadow,
    iconSize: [40, 40],
    shadowSize: [40, 55],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

  return (
    <div>
      <MapContainer
              attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              center={[40.102947, 22.502612]}
              zoom={11}
              scrollWheelZoom={false}
              className="w-[350px] md:w-[550px] lg:w-[400px] xl:w-[550px] h-[400px] lg:h-[450px] xl:h-[550px] z-0 object-contain rounded-2xl drop-shadow-xl"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {locationData.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.lat, location.lng]}
                  icon={customMarker}
                >
                  <Popup>
                    <h2 className="font-links font-bold text-lg">{location.name}</h2>
                    <p className="font-body">({location.lat}, {location.lng})</p>
                    <img src={location.image} alt={location.alt} className="h-[200px] w-auto object-cover rounded-2xl" />
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
  )
}

export default MapDisplay
