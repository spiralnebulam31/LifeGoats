import { motion } from 'framer-motion';

const OverviewCard = ({ index, alt, image, title, text, yMoving }) => {
  return (
    <motion.div
      className="w-[280px] h-[400px] lg:h-[470px] z-0 bg-background m-3 rounded-2xl shadow-lg overflow-hidden"
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
          <p className="text-primary font-body text-center text-[14px] lg:text-[16px] max-w-6xl pt-2 pb-1">
            {text}
          </p>
        </div>
      </motion.div>
  );
};

export default OverviewCard;
