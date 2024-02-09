import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../motion/home-sections";
import GoatPrintsWalking from "../components/Loaders/GoatPrintsWalking";

const TheHistory= () => {  

  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0
      overflow-hidden pt-2 pb-2 z-10 mb-[130px]"
    >
      <motion.div
        className="text-center w-[80%] lg:w-[70%] mx-auto
        pt-28 mb-3 overflow-hidden"
      >

        <motion.h1
            className="text-earth font-title text-4xl lg:text-6xl font-bold">
            A brief history
        </motion.h1>
        <motion.h2
            className="text-primary font-subtitle text-xl lg:text-3xl font-bold">
            by Maria
        </motion.h2>
       
      </motion.div>

      <motion.div
        className="flex flex-col justify-center text-center mx-auto pt-10 pb-8 font-body lg:text-lg text-md w-[80%] lg:w-[70%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
      >

<p>Mount Olympus has always had a special place in my heart.</p>
<br />
<p>Let's rewind…</p>
<br />
<p>Four years old: The indoctrination begins…</p>
<br />
<p>Kenosha, Wisconsin. Small kitchen table against the wall with four chairs. A map of Greece plastered on the wall and a small pin on this specific location at the foot of the mountain, a kilometer away from the sea.</p>
<br />
<p>A place we, my family, learned to call ‘The Land’.</p> 
<br />
<p>My parents purchased this piece of land in 1988. Surrounded by farm fields, it was far from the touristic villas and vacation homes of our peers, but the location was phenomenal!</p>
<br />
<p>Breakfast with a view of the mountain and less than a ten-minute walk to the beach, my siblings and I spent our summers and long weekends there, away from the big concrete jungle of the city of Thessaloniki where we moved to in 1994.</p>
<br />
<p>Exploring mountain trails and endless hours at the beach, we camped at the Land as often as the weather conditions allowed.</p>
<br />
        <p className="font-bold pt-14 pb-4">
            Stay tuned to read the rest of the story!
        </p>

        <motion.div className="w-[90%] pb-8">
          <GoatPrintsWalking />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TheHistory;
