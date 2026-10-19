'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import GoatPrintsWalking from "../../components/Loaders/GoatPrintsWalking";
import { historyBG } from "@/src/assets";
import Image from "next/image";
import "@/src/scss/pages/Page.scss";

const TheHistory = () => {
  return (
    <motion.div
      className="page page--contained"
    >
      <Image
        src={historyBG}
        alt=""
        className="page__backdrop"
        width={1920}
        height={1080}
      />
      <motion.div className="page__card">
        <motion.div className="page__heading">
          <motion.h1 className="page__title">
            A brief history
          </motion.h1>
          <motion.h2 className="page__subtitle">
            by Maria
          </motion.h2>
        </motion.div>
        <motion.div className="page__text" variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <p>Mount Olympus has always had a special place in my heart.</p>
          <br />
          <p>Let&apos;s rewind…</p>
          <br />
          <p>Four years old: The indoctrination begins…</p>
          <br />
          <p>Kenosha, Wisconsin. Small kitchen table against the wall with four chairs. A map of Greece plastered on the wall and a small pin on this specific location at the foot of the mountain, a kilometer away from the sea.</p>
          <br />
          <p>A place we, my family, learned to call ‘The Land’.</p>
          <br />
          <p>My parents purchased this piece of land in 1988. Surrounded by farm fields, it was far from the touristic villas and vacation homes of our peers, but the location was phenomenal!</p>
          <br />
          <p>Breakfast with a view of the mountain and less than a ten-minute walk to the beach, my siblings and I spent our summers and long weekends there, away from the big concrete jungle of the city of Thessaloniki where we moved to in 1994.</p>
          <br />
          <p>Exploring mountain trails and endless hours at the beach, we camped at the Land as often as the weather conditions allowed.</p>
        </motion.div>
      </motion.div>
      <div className="page__closing">
        <motion.p className="page__closing-text" variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          Stay tuned to read the rest of the story!
        </motion.p>
        <motion.div className="page__prints" variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <GoatPrintsWalking />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TheHistory;
