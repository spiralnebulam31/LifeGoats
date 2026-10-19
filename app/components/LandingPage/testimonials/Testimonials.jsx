'use client';

import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../../motion/home-sections";
import { testimonials } from "../../../../data/testimonials";
import TestimonialsCard from "./TestimonialsCard";
import Link from "next/link";
import "@/src/scss/components/LandingPage/testimonials/Testimonials.scss";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials"
    >
      <motion.div
        className="testimonials__header"
      >
        <motion.p
          className="testimonials__pretitle"
          variants={floatFromDownPreTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          A word
        </motion.p>
        <motion.h2
          className="testimonials__title"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          From our goats...
        </motion.h2>
      </motion.div>

      <motion.div className="testimonials__row">
        <motion.div className="testimonials__grid">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonials__item"
              initial={{
                opacity: 0,
                translateX: index % 2 === 0 ? -100 : 100,
                translateY: -100,
              }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                translateY: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                },
              }}
            >
              <TestimonialsCard key={index} {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Link 
        href="/testimonials" 
        className="testimonials__more-link"
      >
        <motion.div
          className="testimonials__more"
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate" 
viewport={{ once: true }}
        >
          <button
            className="testimonials__more-button"
          >
            Read more from our community
          </button>
        </motion.div>
      </Link>
    </section>
  );
};

export default Testimonials;