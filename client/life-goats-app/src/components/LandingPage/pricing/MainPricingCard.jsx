import { motion } from "framer-motion";

const MainPricingCard = ({ index, title, accommodation, location, pricePerNight, priceForFourNights, notes }) => {
  return (
    <motion.div>
            <motion.div
            key={index}
            className="flex flex-col justify-center items-center mx-auto py-4 bg-background rounded-2xl drop-shadow-xl text-primary
            font-body md:text-[16px] text-[14px] w-[80%] lg:w-[45%]"
            >
            <p className="text-center text-bold text-earth text-lg">{title}</p>
            <p className="text-center text-bold text-earth text-lg">{accommodation}</p>
            <p className="text-center text-bold text-earth text-lg">{location}</p>
            <p className="text-center text-bold text-earth text-lg">{pricePerNight}</p>
            <p className="text-center text-bold text-earth text-lg">{priceForFourNights}</p>
            {notes && <p className="text-center text-bold text-earth text-lg">{notes}</p>}
            </motion.div>     
    </motion.div>
  )
}

export default MainPricingCard;
