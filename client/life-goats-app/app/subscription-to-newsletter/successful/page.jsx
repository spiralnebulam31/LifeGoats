"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import { hikingBoots } from "@/public/assets/subscriptions";
// import GoatPrintsWalking from "../components/Loaders/GoatPrintsWalking";
import Image from "next/image";
import Link from "next/link";

function SuccessfulSubscription() {
  return (
    <motion.div className="bg-background relative bg-cover w-screen h-auto min-h-screen inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mt-[60px] mb-[180px] flex flex-col justify-center text-center mx-auto">
      {/* Title and Subtitle */}
      <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto pt-10 mb-1">
        <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold">
          Subscription successful!
        </motion.h1>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-center items-center lg:items-start mx-auto pt-10 pb-16 font-body lg:text-lg text-md w-[90%] lg:w-[70%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
      >
        {/* Image */}
        <div className="mb-8 lg:mb-0 lg:mr-8 flex-shrink-0 w-full sm:w-[90%] md:w-[70%] lg:w-[50%]">
          <Image
            src={hikingBoots}
            alt="Hiking Boots with a mountain background"
            className="rounded-lg shadow-lg w-full h-auto"
            width={1000} // Arbitrary large value for responsiveness
            height={1000} // Arbitrary large value for responsiveness
          />
        </div>

        {/* Success Message */}
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] text-center">
          <p className="mb-4 text-primary font-body">
            You have successfully been added to our list of subscribers! To
            start receiving the Life Goats newsletter, please check your inbox
            and confirm your subscription. Make sure to also check your spam
            folder...
          </p>

          {/* Uncomment when GoatPrintsWalking component is available */}
          {/* <motion.div
            className="w-[70%] mx-auto mb-4"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
          >
            <GoatPrintsWalking />
          </motion.div> */}

          {/* <p className="mt-2 pb-4 text-center text-primary font-body">
            Changed your mind? You can unsubscribe anytime by clicking{" "}
            <Link href="/subscriptions?action=unsubscribe">
              <span className="font-links underline text-secondary hover:text-tertiary">
                here
              </span>
            </Link>
            .
          </p> */}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SuccessfulSubscription;
