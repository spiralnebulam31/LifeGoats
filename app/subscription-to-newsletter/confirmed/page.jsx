"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import { hikingBoots } from "@/src/assets/subscriptions";
// import GoatPrintsWalking from "../components/Loaders/GoatPrintsWalking";
import Image from "next/image";
import "@/src/scss/pages/Page.scss";
import "@/src/scss/pages/subscription-to-newsletter/Subscription.scss";
// import Link from "next/link";

function ConfirmedSubscription() {
  return (
    <motion.div className="page page--full-height page--below-nav-tight">
      {/* Title and Subtitle */}
      <motion.div className="page__heading page__heading--tight">
        <motion.h1 className="page__title">
          Subscription confirmed!
        </motion.h1>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="subscription__content"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      >
        {/* Image */}
        <div className="subscription__image-wrap">
          <Image
            src={hikingBoots}
            alt="Hiking Boots with a mountain background"
            className="subscription__image"
            width={1000} // Arbitrary large value for responsiveness
            height={1000} // Arbitrary large value for responsiveness
          />
        </div>

        {/* Success Message */}
        <div className="subscription__message">
          <p className="subscription__message-text">
            Your subscription has been confirmed. From now on you will be
            receiving the Life Goats newsletter ;)
          </p>

          {/* Uncomment when GoatPrintsWalking component is available */}
          {/* <motion.div
            className="w-[70%] mx-auto mb-4"
            variants={fadeIn}
            initial="initial"
            whileInView="animate" 
viewport={{ once: true }}
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

export default ConfirmedSubscription;
