'use client';

import { motion } from "framer-motion";
import { directorsChairs } from "@/src/assets/the-team";
import { teamData } from "../../../data/team";
import TeamCard from "../../components/About/team/TeamCard";
import Image from "next/image";
import "@/src/scss/pages/Page.scss";
import "@/src/scss/components/About/team/TeamCard.scss";

const TheTeam = () => {
  return (
    <section
      className="page page--fluid page--full-height page--below-nav"
    >
 <Image
        src={directorsChairs}
        alt=""
        className="page__backdrop"
        width={1920}
        height={1080}      />

      <h1 className="visually-hidden">The Life Goats team</h1>

      <motion.div className="team-page__row">
      <motion.div className="team-page__members">
        {/* <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 mb-2 md:mb-4"> - use this instead of the above row if you have more than 2 team members */}
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              className="team-page__member"
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
