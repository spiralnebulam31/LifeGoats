'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import Link from "next/link";

const Subscribe = () => {
  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-screen min-h-full inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mb-[180px] flex flex-col justify-center text-center mx-auto"
    >
        <motion.div className="bg-background flex flex-col justify-center text-center mx-auto pt-10 pb-8 font-body lg:text-lg text-md w-[80%] lg:w-[70%]" variants={fadeIn} initial="initial" whileInView="animate">
          <p className="font-bold">This page has moved.</p>
          <br />
          <p>If you&apos;re looking for the subscribe page, you can find it{" "}
          <Link href="/subscriptions?action=subscribe" className="cursor-pointer underline text-secondary hover:text-tertiary">here</Link>.
          </p> 
          <br />
          <p>If you wish to unsubscribe, you can do it{" "}
            <Link href="/subscriptions?action=unsubscribe" className="cursor-pointer underline text-secondary hover:text-tertiary">here</Link>.
          </p>
        </motion.div>
      </motion.div>
  );
};

export default Subscribe;