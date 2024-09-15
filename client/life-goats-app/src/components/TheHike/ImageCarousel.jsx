import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { arrowNext, arrowPrevious } from "../../assets/the-hike";

const ImageCarousel = ({ imageSliderData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = imageSliderData.length;

  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  if (!Array.isArray(imageSliderData) || length <= 0) {
    return null;
  } // If there are no images, return null

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-[90%] mb-10">
      <motion.h2 className="text-xl font-subtitle font-bold text-tertiary mb-6">
        The Experience
      </motion.h2>

      <div className="flex flex-row justify-center items-center mx-auto w-[90%] lg:w-[70%]">
        <div onClick={handlePrevious}>
          <img
            src={arrowPrevious}
            alt="Previous"
            className="cursor-pointer opacity-80 hover:opacity-100 w-16 hover:w-20"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center mx-auto drop-shadow-xl"
          >
            <img
              src={imageSliderData[currentIndex].photo}
              alt={imageSliderData[currentIndex].alt}
              className="w-[90%] max-h-[450px]"
            />
            <p className="text-center text-primary font-body text-md mt-4">
              {imageSliderData[currentIndex].caption}
            </p>
          </motion.div>
        </AnimatePresence>

        <div onClick={handleNext}>
          <img
            src={arrowNext}
            alt="Next"
            className="cursor-pointer opacity-80 hover:opacity-100 w-16 hover:w-20"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        {imageSliderData.map((_, index) => (
          <div
            key={index}
            className={`dot w-2 h-2 md:w-4 md:h-4 rounded-full mx-1 hover:cursor-pointer ${currentIndex === index ? "bg-earth" : "bg-tertiary"}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
