"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";

const PrivacyPolicyPage = () => {
  return (
    <motion.div className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mt-[70px] mb-[180px] flex flex-col justify-center text-center mx-auto">
      <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto pt-10 mb-3 overflow-hidden">
        <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold">
          Privacy Policy
        </motion.h1>
      </motion.div>
      <motion.div
        className="bg-background flex flex-col justify-center text-start mx-auto pt-10 pb-10 font-body lg:text-lg text-md w-[80%] lg:w-[70%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
      >
        <div>
          <h2 className="text-primary font-subtitle text-xl lg:text-2xl font-bold mb-2">
            What We Collect
          </h2>
          <p>
            We collect personal information such as name, email address and any
            other data you provide to us in your messages directly through our
            forms and other contact ways (Contact form, Subscribe to our
            newsletter form, sending us an email or contacting us via phone).
          </p>
          <br />
          <h2 className="text-primary font-subtitle text-xl lg:text-2xl font-bold mb-2">
            How We Use Your Information
          </h2>
          <p>
            We use your email address to send you newsletters and event updates.
            We may also use it to respond to your message. We will use your
            phone number only after you’ve called us (we don’t ask for your
            phone number anywhere on the website) and consented to us contacting
            you back the same way.
          </p>
          <br />
          <h2 className="text-primary font-subtitle text-xl lg:text-2xl font-bold mb-2">
            Data Security
          </h2>
          <p>
            We use industry-standard measures to secure your personal data and
            protect it from unauthorized access or disclosure. Your data is
            stored in a secured database and a secure document in which only the
            Life Goats core team has access.
          </p>
          <br />
          <h2 className="text-primary font-subtitle text-xl lg:text-2xl font-bold mb-2">
            How long we keep your data for
          </h2>
          <p>
            We keep your data only for as long as you allow it. If you request
            us to delete your data or if you unsubscribe from our newsletter,
            all your data will be deleted from our systems.
          </p>
          <br />
          <h2 className="text-primary font-subtitle text-xl lg:text-2xl font-bold mb-2">
            GDPR Compliance
          </h2>
          <p>
            We are committed to complying with the General Data Protection
            Regulation (GDPR) to protect your privacy and personal data. Under
            GDPR, you have the following rights regarding your data:
          </p>
          <ul className="list-disc list-inside text-left mt-4">
            <li>
              <strong>Right to Access:</strong> You can request a copy of the
              personal data we hold about you.
            </li>
            <li>
              <strong>Right to Rectification:</strong> If any information we
              hold is inaccurate or incomplete, you have the right to request
              corrections.
            </li>
            <li>
              <strong>Right to Erasure:</strong> You can request that we delete
              your personal data, and we will comply unless we are required to
              retain it for legal or contractual obligations.
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> You can ask us to
              stop using your data in certain circumstances.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You can request a copy
              of your personal data in a machine-readable format to transfer to
              another service.
            </li>
            <li>
              <strong>Right to Object:</strong> You have the right to object to
              the processing of your data for certain purposes, such as direct
              marketing.
            </li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:lifegoatsconnect@gmail.com"
              className="cursor-pointer underline text-secondary hover:text-tertiary font-links"
            >
              lifegoatsconnect@gmail.com
            </a>
            .
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
