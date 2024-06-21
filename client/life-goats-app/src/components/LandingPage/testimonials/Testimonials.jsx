import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../motion/home-sections";
import { testimonials } from "../../../constants/testimonials";
import TestimonialsCard from "./TestimonialsCard";
import { Link } from "react-router-dom";

const Testimonials = ({ isSmallScreen }) => {
  return (
    <section
      className="bg-gradient-to-b from-blue-400 via-blue-100 to-background
      relative bg-cover bg-no-repeat w-full h-full inset-0 overflow-hidden pt-2 pb-12 z-10"
    >
      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-8 mb-8 z-10 overflow-hidden"
      >
        <motion.h2
          className="md:text-[30px] text-[20px] text-background font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          What our community is saying...
        </motion.h2>
      </motion.div>

      <motion.div className="flex flex-row justify-evenly items-center">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10 mb-2 md:mb-4">
          {testimonials.slice(0,6).map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative z-10"
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
                }
              }}
              >
              <TestimonialsCard key={index} {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

          <Link to="/testimonials">
      <motion.div className="flex justify-evenly items-center mx-auto"
      variants={floatFromDownMainTitle}
      initial="initial"
      whileInView="animate"
      >
          <button className="bg-primary text-background font-subtitle font-bold uppercase tracking-wider py-2 mt-8 px-4 rounded-lg shadow-lg
          hover:bg-secondary hover:text-primary">
            Read more from our community
          </button>
      </motion.div>
          </Link>

    </section>
  );
};

export default Testimonials;
