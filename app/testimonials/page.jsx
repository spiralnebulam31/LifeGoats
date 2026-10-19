'use client';

import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../motion/home-sections";
import { testimonials } from "../../data/testimonials";
import { TestimonialsPageCard } from "../components/LandingPage/testimonials";
import Link from "next/link";
import "@/src/scss/pages/testimonials/Testimonials.scss";

const TestimonialsPage = () => {
  return (
    <motion.div
      className="testimonials-page"
    >

      <motion.div
        className="testimonials-page__header"
      >
<motion.p
          className="testimonials-page__pretitle"
          variants={floatFromDownPreTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          A word
        </motion.p>
        <motion.h2
          className="testimonials-page__title"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          From our goats...
        </motion.h2>
      </motion.div>

      <motion.div className="testimonials-page__row">
        <motion.div className="testimonials-page__columns">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonials-page__item"
              initial={{
                opacity: 0,
                translateY: 50,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.1,
                },
              }}
            >
              <TestimonialsPageCard key={index} {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Link href="/contact">
        <motion.div
          className="testimonials-page__cta-row"
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
        >
          <button
            className="testimonials-page__cta"
          >
            Have you been to one of our events? Share your experience with us!
          </button>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default TestimonialsPage;
