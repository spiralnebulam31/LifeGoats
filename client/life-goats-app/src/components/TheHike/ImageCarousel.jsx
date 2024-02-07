import { useState } from "react";
import { arrowNext, arrowPrevious } from "../../assets/the-hike";

const ImageCarousel = ( { imageSliderData } ) => {

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

    <div className="flex flex-row justify-center items-center mx-auto w-full">

        <div onClick={handlePrevious}>
          <img src={arrowPrevious} alt="Previous" className="cursor-pointer opacity-80 hover:opacity-100 w-16 hover:w-20" />
        </div>

        <img
          key={currentIndex}
          src={imageSliderData[currentIndex].photo}
        />

        <div onClick={handleNext}>
          <img src={arrowNext} alt="Next" className="cursor-pointer opacity-80 hover:opacity-100 w-16 hover:w-20" />
        </div>

        </div>


        {imageSliderData.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}

    </div>
  );
}

export default ImageCarousel;
