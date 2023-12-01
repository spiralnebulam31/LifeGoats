import DetailsCardLarge from "./DetailsCardLarge";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
} from "../../../assets/index.js";

const Details = () => {
  return (
    <section
      id="details"
      className="bg-background relative bg-cover w-full h-full top-0 left-0 right-0 bottom-0 py-5 overflow-hidden">

      <div className="grid grid-cols-4 gap-3 w-full h-full p-4 relative">

        <div className="row-span-3 col-span-1">
          <img src={photo1} alt="Maria and Natasa in a stream on the mountain" className="rounded-2xl rounded-tl-2xl rounded-bl-2xl" />
        </div>
        <div className="row-span-1 col-span-1">
          <img src={photo2} alt="donkeys near the top of the mountain" className="rounded-2xl" />
        </div>
        <div className="row-span-1 col-span-1">
          <img src={photo3} alt="king of the mountain" className="rounded-2xl" />
        </div>
        <div className="row-span-3 col-span-1">
          <img src={photo4} alt="trees on the mountain" className="rounded-2xl rounded-tr-2xl rounded-br-2xl" />
        </div>
        <div className="row-span-1 col-span-2">
        <DetailsCardLarge />
        </div>
        <div className="row-span-1 col-span-1">
          <img src={photo5} alt="Elizabeth on the mountain" className="rounded-2xl" />
        </div>
        <div className="row-span-1 col-span-1">
          <img src={photo6} alt="Ruby on the mountain" className="rounded-2xl" />
        </div>

      </div>

    </section>
  );
};

export default Details;
