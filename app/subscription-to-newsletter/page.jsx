"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import { useEffect } from "react";
import "@/src/scss/pages/Page.scss";
import "@/src/scss/pages/subscription-to-newsletter/Subscription.scss";

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
    <motion.div className="page page--contained page--full-height page--below-nav-tight">
      {/* Title and Subtitle */}
      <motion.div className="page__heading page__heading--tight">
        <motion.h1 className="page__title">
          Subscribe
        </motion.h1>
        <motion.h2 className="page__subtitle">
          to our newsletter
        </motion.h2>
      </motion.div>

      {/* ConvertKit Form Target Container */}
      <motion.div
        className="subscription__form-wrap"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      >
        <div
          id="convertkit-target"
          className="subscription__form-target"
        >
          {/* The form will be moved here by JavaScript */}
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="subscription__content"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      ></motion.div>
    </motion.div>
  );
}

export default SubscribeForm;
