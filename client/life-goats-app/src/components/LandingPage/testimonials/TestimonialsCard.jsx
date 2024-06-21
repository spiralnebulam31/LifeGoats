import { motion } from 'framer-motion';

const TestimonialsCard = ({ index, alt, image, name, text, yMoving }) => {
  return (
    <motion.div
      className="flex flex-row mx-auto gap-1 justify-center text-center my-auto w-[280px] h-[320px] lg:w-[480px] px-4 z-0 bg-background m-3 rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src={image}
          alt={alt}
          className="flex justify-center text-center my-auto object-cover w-40 h-40 rounded-full drop-shadow-lg"
        />
        <div className="px-6 pt-3 pb-1 flex flex-col justify-center text-center mx-auto">
          <p className="text-primary font-body text-center text-[14px] md:text-[16px] py-2">
            {text}
          </p>
          <p className="text-primary font-subtitle text-center text-[14px] font-bold py-2 italic">
            {name}
          </p>
        </div>
      </motion.div>
  );
};

export default TestimonialsCard;
