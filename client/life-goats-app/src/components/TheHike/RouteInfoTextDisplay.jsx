import { motion } from "framer-motion";

const RouteInfoTextDisplay = ( { routeText } ) => {
  return (
    <motion.div className="flex flex-col lg:flex-row justify-center items-start mx-auto w-[90%]">

    <motion.div className="flex flex-col justify-center items-center text-center mx-auto my-3 py-2 px-4 text-primary
      font-body md:text-[16px] text-[14px] w-full lg:w-1/3">
      <motion.h2
        className="text-lg font-subtitle font-bold text-tertiary mb-2"
        >
        The Trail
      </motion.h2>
          {routeText.slice(0, 3).map((text) => (
            <p key={text} className="font-medium text-md font-body py-2 w-full lg:w-[90%]">{text}</p>
          ))}
      </motion.div>

      
    <motion.div className="flex flex-col justify-center items-center text-center mx-auto my-3 py-2 px-4 text-primary
      font-body md:text-[16px] text-[14px] w-full lg:w-1/3">
      <motion.h2
        className="text-lg font-subtitle font-bold text-tertiary mb-2"
        >
        The Reassurance
      </motion.h2>
          {routeText.slice(3, 6).map((text) => (
            <p key={text} className="font-medium text-md font-body py-2 w-full lg:w-[90%]">{text}</p>
          ))}
      </motion.div>

      
    <motion.div className="flex flex-col justify-center items-center text-center mx-auto my-3 py-2 px-4 text-primary
      font-body md:text-[16px] text-[14px] w-full lg:w-1/3">
      <motion.h2
        className="text-lg font-subtitle font-bold text-tertiary mb-2"
        >
        The Challenge
      </motion.h2>
          {routeText.slice(6, 7).map((text) => (
            <p key={text} className="font-medium text-md font-body py-2 w-full lg:w-[90%]">{text}</p>
          ))}
      </motion.div>

    </motion.div>
  )
}

export default RouteInfoTextDisplay;
