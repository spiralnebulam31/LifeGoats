import { motion } from 'framer-motion';

const DetailCard = ({ index, name, icon, alt, text }) => {
    return (
      <motion.div
      className="bg-background rounded-2xl flex justify-center items-center flex-col"
    >
      <motion.div
       className="bg-background rounded-2xl flex justify-evenly items-center flex-row p-1"
          >
            <img
              src={icon}
              alt={alt}
              className="w-18 lg:w-20 object-contain rounded-2xl hue-rotate-180 lg:h-20 p-2 mb-1 shadow-md"
            />
      </motion.div>
          <motion.div
            className="bg-background rounded-2xl flex justify-evenly items-center flex-col  px-4 lg:px-1 h-20"
          >
            <p className="text-tertiary font-subtitle text-center text-[13px] lg:text-[14px] font-bold max-w-6xl -pt-1 -mb-4 px-4 h-10">{name}</p>
            <p className="text-primary font-body flex flex-wrap text-center text-[15px] lg:text-[16px] w-22 lg:w-24 h-10 justify-center items-start mx-auto">{text}</p>
          </motion.div>
        </motion.div>
    );
  };

export default DetailCard;