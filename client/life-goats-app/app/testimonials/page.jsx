'use client';

import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../motion/home-sections";
import { testimonials } from "../../data/testimonials";
import { TestimonialsPageCard } from "../components/LandingPage/testimonials";
import Link from "next/link";

const TestimonialsPage = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-secondary to-background relative bg-cover w-full h-auto overflow-x-hidden p-2 z-10 mb-[180px] mt-[60px] flex flex-col justify-center text-center mx-auto"
    >

      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-8 mb-8 z-10 overflow-hidden"
      >
<motion.p
          className="md:text-[18px] text-[14px] text-background font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          A word
        </motion.p>
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-1 md:pb-4 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          From our goats...
        </motion.h2>
      </motion.div>

      <motion.div className="flex flex-row justify-center items-start px-4">
        <motion.div className="columns-1 md:columns-2 lg:columns-3 gap-2 w-full max-w-7xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative z-10 break-inside-avoid mb-4 md:mb-6"
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
          className="flex justify-evenly items-center mx-auto"
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
        >
          <button
            className="bg-primary text-background font-subtitle font-bold uppercase tracking-wider py-2 my-8 px-4 rounded-lg shadow-lg
          hover:bg-tertiary hover:text-earth"
          >
            Have you been to one of our events? Share your experience with us!
          </button>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default TestimonialsPage;
