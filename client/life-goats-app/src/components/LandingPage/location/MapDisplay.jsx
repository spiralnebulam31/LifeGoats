import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { locationData } from "../../../constants/constants";
import { mapPin, pinShadow } from "../../../assets/index.js";

const MapDisplay = () => {

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
                    <h2 className="font-links font-bold">{location.name}</h2>
                    <p className="font-body">Latitude: {location.lat}</p>
                    <p className="font-body">Longitude: {location.lng}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
    </div>
  )
}

export default MapDisplay
