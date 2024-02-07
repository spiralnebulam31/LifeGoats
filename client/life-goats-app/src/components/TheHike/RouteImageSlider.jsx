import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const RouteImageSlider = ( { imageSliderData } ) => {


  return (
    <div className="mx-auto w-[90%]">

        {imageSliderData.map((image) => (
          <div key={image.id} className="slider-image-container">
            <img src={image.photo} alt={image.alt} className="slider-image" />
            <p className="slider-caption">{image.caption}</p>
          </div>
        ))}

    </div>
  );
}

export default RouteImageSlider;
