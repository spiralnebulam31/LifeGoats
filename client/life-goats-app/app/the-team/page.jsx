'use client';

import { motion } from "framer-motion";
import { directorsChairs } from "../../public/assets/the-team";
import { teamData } from "../data/team";
import TeamCard from "../components/About/team/TeamCard";

const TheTeam = ({ isSmallScreen }) => {
  return (
    <section
      className="bg-background relative bg-cover w-screen h-full min-h-screen mt-[70px] inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mb-[130px] flex flex-col justify-center text-center mx-auto"
    >
 <img
        src={directorsChairs}
        alt="mountain background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 opacity-30"
      />

      <motion.div className="flex flex-row justify-evenly items-center">
      <motion.div className="flex flex-col lg:flex-row mx-auto gap-8 lg:gap-20 my-8">
        {/* <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 mb-2 md:mb-4"> - use this instead of the above row if you have more than 2 team members */}
          {teamData.map((member, index) => (
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
              <TeamCard key={index} {...member} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TheTeam;
