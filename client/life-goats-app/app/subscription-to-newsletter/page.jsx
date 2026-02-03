"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import { useEffect } from "react";

function SubscribeForm() {
  useEffect(() => {
    // Load the script manually and move the form to our container
    const script = document.createElement("script");
    script.src = "https://lifegoatsconnect.kit.com/98d37aa8fa/index.js";
    script.async = true;
    script.setAttribute("data-uid", "98d37aa8fa");

    script.onload = () => {
      // Wait for ConvertKit to inject the form, then move it
      const moveForm = () => {
        const container = document.getElementById("convertkit-target");
        const forms = document.querySelectorAll(
          '[data-uid="98d37aa8fa"], .formkit-form, .seva-form, .formkit-container'
        );

        if (container && forms.length > 0) {
          const form = forms[0];
          // Remove any fixed positioning and move the form
          form.style.position = "static";
          form.style.left = "auto";
          form.style.right = "auto";
          form.style.top = "auto";
          form.style.bottom = "auto";
          form.style.transform = "none";
          form.style.zIndex = "1";
          form.style.width = "100%";
          form.style.maxWidth = "500px";
          form.style.margin = "0 auto";

          // Move the form into our container
          container.appendChild(form);
          console.log("ConvertKit form moved to container");
        } else {
          // Keep trying if form hasn't loaded yet
          setTimeout(moveForm, 200);
        }
      };

      setTimeout(moveForm, 100);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.div className="bg-background relative bg-cover w-screen h-auto min-h-screen inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mt-[60px] mb-[180px] flex flex-col justify-center text-center mx-auto">
      {/* Title and Subtitle */}
      <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto pt-10 mb-1">
        <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold">
          Subscribe
        </motion.h1>
        <motion.h2 className="text-primary font-subtitle text-xl lg:text-3xl font-bold">
          to our newsletter
        </motion.h2>
      </motion.div>

      {/* ConvertKit Form Target Container */}
      <motion.div
        className="flex justify-center w-[90%] lg:w-[70%] mx-auto pt-8 pb-4"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      >
        <div
          id="convertkit-target"
          className="w-full max-w-md mx-auto text-center"
        >
          {/* The form will be moved here by JavaScript */}
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-center items-center lg:items-start mx-auto pt-10 pb-16 font-body lg:text-lg text-md w-[90%] lg:w-[70%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      ></motion.div>
    </motion.div>
  );
}

export default SubscribeForm;
