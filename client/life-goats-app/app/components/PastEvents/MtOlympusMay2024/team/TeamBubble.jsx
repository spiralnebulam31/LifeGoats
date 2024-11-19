import { motion } from 'framer-motion';

const TeamBubble = ({ index, alt, image, title, responsibilty, yMoving }) => {
  return (
    <motion.div
      className="z-0 m-3 overflow-hidden"
      >
        <img
          src={image}
          alt={alt}
          className="object-cover w-[150px] h-[150px] rounded-full shadow-lg"
        />
        <div className="px-6 pt-3 pb-1 flex flex-col mx-auto w-[150px] h-auto">
          <h2 className="text-tertiary font-subtitle text-center text-[18px] font-bold max-w-6xl py-0">
            {title}
          </h2>
          <p className="text-primary font-body text-center text-[14px] md:text-[16px] max-w-6xl py-0">
            {responsibilty}
          </p>
        </div>
      </motion.div>
  );
};

export default TeamBubble;
