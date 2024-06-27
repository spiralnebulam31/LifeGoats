import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../motion/home-sections";
import { testimonials, longTestimonials } from "../constants/testimonials";
import { TestimonialsCard, LongTestimonialsCard } from "../components/LandingPage/testimonials";
import { Link } from "react-router-dom";

const TestimonialsPage = ({ isSmallScreen }) => {
  return (
    <motion.div
      className="bg-gradient-to-b from-secondary to-background relative bg-cover w-screen h-auto min-h-screen inset-0 left-0 right-0 top-0 overflow-hidden p-2 z-10 mb-[129px] mt-[60px] flex flex-col justify-center text-center mx-auto"
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

      <motion.div className="flex flex-row justify-evenly items-center">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10 mb-2 md:mb-4">
          {testimonials.slice(0, 3).map((testimonial, index) => (
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
                },
              }}
            >
              <TestimonialsCard key={index} {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-row justify-center items-center mt-4">
          <LongTestimonialsCard key={0} {...longTestimonials[0]} />
      </motion.div>

      <Link to="/contact" target="_blank" rel="noreferrer">
        <motion.div
          className="flex justify-evenly items-center mx-auto"
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate"
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
