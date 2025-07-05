'use client';

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './CoreValues.module.css';
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../../motion/home-sections";
import { coreValues } from "../../../../data/core-values";
import CoreValuesCard from "./CoreValuesCard";

const CoreValues = () => {
  return (
    <section
      id="core-values"
      className="bg-gradient-to-b from-background via-gray-500 to-tertiary relative bg-cover bg-no-repeat w-full h-full inset-0 overflow-hidden pt-2 pb-12 z-10"
    >
      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto pt-8 mb-5 z-10 overflow-hidden"
      >
        <motion.p
          className="md:text-[18px] text-[14px] text-primary font-subtitle font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          The herd&apos;s
        </motion.p>
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px] sm:text-[45px] text-[40px] outline-background-2 pb-1 md:pb-4 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          Core Values
        </motion.h2>
      </motion.div>

      <motion.div className="w-full px-4 md:px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className={styles.coreValuesSwiper}
        >
          {coreValues.map((value, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative z-10 flex justify-center"
                initial={{
                  opacity: 0,
                  translateY: 50,
                }}
                whileInView={{
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1,
                  }
                }}
                viewport={{ once: true }}
              >
                <CoreValuesCard {...value} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default CoreValues;