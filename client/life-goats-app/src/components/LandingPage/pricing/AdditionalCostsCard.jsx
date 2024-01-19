import { motion } from "framer-motion";

const AdditionalCostsCard = ( { index, description, details }) => {
  return (
    <motion.div>
            <motion.div
            key={index}
            className="flex flex-col justify-center items-center mx-auto py-4 bg-background rounded-2xl drop-shadow-xl text-primary
            font-body md:text-[16px] text-[14px] w-[80%] lg:w-[45%]"
            >
            <p className="text-center text-bold text-earth text-lg">{description}</p>
            {details && <p className="text-center text-bold text-earth text-lg">{details}</p>}
            </motion.div>
    </motion.div>
  )
}

export default AdditionalCostsCard;
