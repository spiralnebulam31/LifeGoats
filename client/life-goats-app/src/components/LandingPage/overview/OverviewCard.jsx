import { motion } from 'framer-motion';
import { fadeIn } from '../../../motion/motion.js';
import { Tilt } from 'react-tilt';

const OverviewCard = ({ index, alt, image, title, text, yMoving }) => {
  return (
    <Tilt
      className="w-[250px] h-[380px] lg:h-[450px] z-0"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        variants={fadeIn('left', 'spring', 0.5, 1.25)}
        className="z-0 bg-background m-3 w-full h-full rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src={image}
          alt={alt}
          className="w-full object-cover h-40 rounded-t-xl"
        />
        <div className="px-6 pt-3 pb-1 flex flex-col mx-auto">
          <h2 className="text-tertiary font-subtitle text-center text-[14px] font-bold max-w-6xl pt-2 pb-1">
            {title}
          </h2>
          <p className="text-primary font-body text-center text-[14px] md:text-[16px] max-w-6xl pt-2 pb-1">
            {text}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default OverviewCard;
