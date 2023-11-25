import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import dotenv from 'dotenv';
// dotenv.config();

const Location = () => {

  //   latitude: 40.102947,
  //   longitude: 22.502612,


  return (
    <section id="location" className="overflow-hidden">
    <div className="bg-background relative bg-cover w-full h-screen top-0 left-0 right-0 bottom-0 pt-5 pb-10">
    <h1>Location</h1>

    <MapContainer center={[40.102947, 22.502612]} zoom={13} scrollWheelZoom={false} className="w-full h-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.102947, 22.502612]}>
        <Popup>
          Mount Olympus
        </Popup>
      </Marker>
    </MapContainer>

    </div>
    </section>
  )
}

export default Location
