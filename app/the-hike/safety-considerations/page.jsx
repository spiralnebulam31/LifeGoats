'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import GoatPrintsWalking from "../../components/Loaders/GoatPrintsWalking";
import { safetyConsiderationsBG } from "@/src/assets";
import Image from "next/image";
import "@/src/scss/pages/Page.scss";
import "@/src/scss/pages/the-hike/safety-considerations/SafetyConsiderations.scss";

const SafetyConsiderations = () => {
  return (
    <motion.div
      className="page page--full-height"
    >
      <Image
        src={safetyConsiderationsBG}
        alt=""
        className="page__backdrop"
        width={1920}
        height={1080}
      />
      <motion.div className="page__card">
        <motion.div className="page__heading">
          <motion.h1 className="page__title page__title--compact">
            Safety Considerations
          </motion.h1>
        </motion.div>
        <motion.ul className="safety__list" variants={fadeIn} initial="initial" whileInView="animate" 
viewport={{ once: true }}>
        <li>
        <p className="safety__label">{"\u279c"} Alternative plan:</p>
        <p>There are some things that are out of our control.</p>
        <p>One of these things is the WEATHER!</p>
        <p>We can’t control the weather, but we can control whether or not we let that bother us 😉</p>
        <p className="safety__last-line">So, we have a list of alternative activities and shorter day hikes in our back pocket in case the weather conditions make the full mountain ascent a bad idea. Stay tuned!</p>
        </li>
        <li>
        <p className="safety__label">{"\u279c"} Speak up!</p>
        <p>Although we will have a slow pace and break as often as necessary for everyone, hiking for long hours with steep stretches and altitude changes can be dangerous if we don’t listen to our bodies.</p>
        <p className="safety__last-line">While we will be your guides and check in with you often, be mindful to speak up honestly about how you are feeling. We will have some tips about staying hydrated and keeping your energy and blood sugar at good levels beforehand and some strong coaching motivation to pull you through some safe yet challenging stretches 😉</p>
        </li>
        <li>
        <p className="safety__label">{"\u279c"} Helmets for the last 40 minutes of the ascent to the highest point (Mytikas peak) are a MUST.</p>
        <p>They can be rented for €8 at Kakalos refuge or Apostolidis refuge at the Plateau of the Muses (base camp).</p>
        </li>
        </motion.ul>
        <div className="safety__outro">
        <p className="safety__outro-line">If you would like any more info or have questions that need answering, feel free to ask!</p>
        <p className="safety__outro-line">We are here for you 🐐🐐🐐</p>
        </div>
      </motion.div>
      <div className="page__closing">
        <motion.p className="page__closing-text" variants={fadeIn} initial="initial" whileInView="animate" 
viewport={{ once: true }}>
        Respect the mountain. Come prepared and with both ambition and humility...
        </motion.p>
        <motion.div className="page__prints" variants={fadeIn} initial="initial" whileInView="animate" 
viewport={{ once: true }}>
          <GoatPrintsWalking />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SafetyConsiderations;
