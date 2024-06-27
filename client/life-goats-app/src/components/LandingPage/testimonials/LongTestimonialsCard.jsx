import { motion } from 'framer-motion';

const LongTestimonialsCard = ({ index, alt, image, name, text, yMoving }) => {
  return (
    <motion.div
      className="flex flex-row mx-auto gap-1 justify-center text-center my-auto w-[340px] h-auto md:w-[440px] px-2 z-0 bg-background m-2 rounded-2xl shadow-lg overflow-hidden"
    >
      {/* <img
        src={image}
        alt={alt}
        className="flex justify-center text-center my-auto object-cover w-28 h-28 md:w-36 md:h-36 rounded-full drop-shadow-lg"
      /> */}
      <div className="px-2 pt-3 pb-1 flex flex-col justify-center text-center mx-auto">
        <div className="text-primary font-body text-center text-[14px] md:text-[16px] py-2">
          {text.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
              {line === "" && <br />}
            </p>
          ))}
        </div>
        <p className="text-primary font-subtitle text-center text-[14px] font-bold py-2 italic">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default LongTestimonialsCard;
