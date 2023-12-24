import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { locationData } from "../../../constants/constants";

const MapDisplay = () => {
  return (
    <div>
      <MapContainer
              attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              center={[40.102947, 22.502612]}
              zoom={11}
              scrollWheelZoom={false}
              className="w-[450px] md:w-[550px] lg:w-[400px] xl:w-[550px] h-[400px] lg:h-[450px] xl:h-[550px] z-0 object-contain rounded-2xl drop-shadow-xl"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {locationData.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.lat, location.lng]}
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
