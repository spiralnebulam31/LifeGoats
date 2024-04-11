import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
import GoatPrintsWalking from "../components/Loaders/GoatPrintsWalking";
import { safetyConsiderationsBG } from "../assets";

const SafetyConsiderations = () => {
  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mb-[130px] flex flex-col justify-center text-center mx-auto"
    >
      <img
        src={safetyConsiderationsBG}
        alt="mountain background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 opacity-30"
      />
      <motion.div className="bg-background rounded-2xl drop-shadow-xl opacity-80 relative top-[100px] mb-10 z-20 w-[80%] lg:w-[70%] text-center mx-auto">
        <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto pt-10 mb-3 overflow-hidden">
          <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold">
            Safety Considerations
          </motion.h1>
          <motion.h2 className="text-primary font-subtitle text-xl lg:text-3xl font-bold">
            for a safe hike
          </motion.h2>
        </motion.div>
        <motion.div className="bg-background flex flex-col justify-center text-center mx-auto pt-10 pb-8 font-body lg:text-lg text-md w-[80%] lg:w-[70%]" variants={fadeIn} initial="initial" whileInView="animate">
          <p>Here are some safety considerations to keep in mind:</p>
          <br />
          <p>1. Check the weather forecast before you go.</p>
          <br />
          <p>2. Dress in layers.</p>
          <br />
          <p>3. Wear sturdy shoes.</p>
          <br />
          <p>4. Bring plenty of water.</p>
          <br />
          <p>5. Bring snacks.</p>
          <br />
          <p>6. Stay on the trail.</p>
          <br />
          <p>7. Be aware of your surroundings.</p>
          <br />
          <p>8. Tell someone where you are going.</p>
          <br />
          <p>9. Bring a map and compass.</p>
          <br />
          <p>10. Be prepared for emergencies.</p>
        </motion.div>
      </motion.div>
      <div className="relative z-20 w-[80%] lg:w-[70%] mx-auto pt-10 pb-8 font-body lg:text-lg text-md">
        <motion.p className="font-bold pt-14 pb-4 text-center" variants={fadeIn} initial="initial" whileInView="animate">
          Be kind to the mountain and it will be kind to you!
        </motion.p>
        <motion.div className="w-[90%] mx-auto" variants={fadeIn} initial="initial" whileInView="animate">
          <GoatPrintsWalking />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SafetyConsiderations;
