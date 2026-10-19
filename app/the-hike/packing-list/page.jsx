'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import GoatPrintsWalking from "../../components/Loaders/GoatPrintsWalking";
import { neededItemsBG } from "@/src/assets";
import NeededItemsText from "../../components/TheHike/NeededItemsText";
import Image from "next/image";
import "@/src/scss/pages/Page.scss";

const PackingList = () => {
  return (
    <motion.div className="page">
      <Image
        src={neededItemsBG}
        alt=""
        className="page__backdrop"
        width={1920}
        height={1080}
      />
      <motion.div className="page__card page__card--solid">
        <motion.div className="page__heading">
          <motion.h1 className="page__title">
            List of Needed Items
          </motion.h1>
          <motion.h2 className="page__subtitle">
            for a comfortable hike
          </motion.h2>
        </motion.div>
        {/* Text */}
        <NeededItemsText />
        {/* End of text */}
      </motion.div>
      <div className="page__closing">
        <motion.p
          className="page__closing-text"
          variants={fadeIn}
          initial="initial"
          whileInView="animate" 
viewport={{ once: true }}
        >
          Let&apos;s get ready and pack our bags!
        </motion.p>
        <motion.div
          className="page__prints"
          variants={fadeIn}
          initial="initial"
          whileInView="animate" 
viewport={{ once: true }}
        >
          <GoatPrintsWalking />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PackingList;
