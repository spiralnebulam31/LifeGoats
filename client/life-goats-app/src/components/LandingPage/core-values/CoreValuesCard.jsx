import { motion } from 'framer-motion';

const CoreValuesCard = ({ index, alt, image, title, text, yMoving }) => {
  return (
    <motion.div
      className="w-[280px] h-[410px] lg:h-[480px] z-0 bg-background m-3 rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src={image}
          alt={alt}
          className="w-full object-cover h-40 rounded-t-xl"
        />
        <div className="px-6 pt-3 pb-1 flex flex-col mx-auto">
          <h2 className="text-tertiary font-subtitle text-center text-[20px] font-bold max-w-6xl py-1">
            {title}
          </h2>
          <p className="text-primary font-body text-center text-[14px] lg:text-[16px] max-w-6xl py-1 mb-2">
            {text}
          </p>
        </div>
      </motion.div>
  );
};

export default CoreValuesCard;
