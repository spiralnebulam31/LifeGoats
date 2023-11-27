import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../../motion/motion.js';

const OverviewCard = ({ index, alt, image, title, text }) => {
    return (
      <Tilt
       className="w-[250px]"
       style={{
            transformStyle: 'preserve-3d',
          }}
        >
        <motion.div
          variants={fadeIn('left', 'spring', 0.5, 1.25)}
          className="bg-gradient-to-b from-secondary via-tertiary to-earth p-[2px] m-3 w-[100px] rounded-2xl shadow-card"
          style={{
            transform: 'translateZ(60px)',
          }}
        >
          <motion.div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-background1 rounded-2xl flex justify-evenly items-center flex-col p-3"
          >
            <img
              src={image}
              alt={alt}
              className="w-full object-contain rounded-2xl max-h-20"
            />
            <h2 className="text-tertiary font-subtitle text-center text-[14px] font-bold max-w-6xl pt-2">{title}</h2>
            <p className="text-primary font-body text-center text-[14px] max-w-6xl pt-2">{text}</p>
          </motion.div>
        </motion.div>
      </Tilt>
    );
  };

export default OverviewCard;
