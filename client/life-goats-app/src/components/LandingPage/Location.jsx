import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { locationData } from "../../constants/constants";
import { motion } from "framer-motion";

const Location = () => {

  return (
    <section id="location" className="overflow-hidden">
    <div className="bg-background relative bg-cover w-full h-screen left-0 right-0 bottom-0 top-0 pb-10 pt-14">
    <h1>Location</h1>

    <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2">

    <motion.div className="text-start w-[80%] md:w-[60%] xl:w-[70%] mx-auto pt-6 mb-5">
    <p>Located in the northern part of mainland Greece, Mount Olympus is the mythical residence of the Greek Gods and currently a nature reserve and treasured hiking destination. Thanks to its high altitude, you can experience a variety of landscapes, from lush green forests and clear water streams to rocky terrains that resemble alpine scenery.</p>
<br /> 
<p>At the foothill of Mount Olympus, the town of Litochoro is home to quaint streets and traditional food. The views of the mountain are captivating, a timeless spectacle throughout the year. Nature and culture co-exist in perfect harmony in this peaceful place.</p>
<br />
<p>Last but not least, Plaka, a settlement by the sea, offers long beaches and clear waters suitable for swimming, only a few kilometers away from Litochoro and Mount Olympus. You can also find a plethora of food choices in taverns and restaurants.</p>
    </motion.div>

    <motion.div className="mb-6 pl-0 pt-6 text-center w-[90%] md:w-[80%] xl:w-[90%] mx-auto z-0">
    <MapContainer
    attribution="&amp;copy <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    center={[40.102947, 22.502612]}
    zoom={11}
    scrollWheelZoom={false}
    className="w-[600px] h-[500px] z-0 object-contain rounded-2xl shadow-md">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {locationData.map((location) => (
        <Marker key={location.id} position={[location.lat, location.lng]}>
          <Popup>
            <h2 className="font-links font-bold">{location.name}</h2>
            <p className="font-body">Latitude: {location.lat}</p>
            <p className="font-body">Longitude: {location.lng}</p>
          </Popup>
        </Marker>
      ))}

    </MapContainer>
    </motion.div>

    </motion.div>

    </div>
    </section>
  )
}

export default Location
