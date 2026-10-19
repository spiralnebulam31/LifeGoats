"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import "@/src/scss/pages/Page.scss";
import "@/src/scss/pages/Policy.scss";

const PrivacyPolicyPage = () => {
  return (
    <motion.div className="page page--contained page--below-nav">
      <motion.div className="page__heading">
        <motion.h1 className="page__title">
          Privacy Policy
        </motion.h1>
      </motion.div>
      <motion.div
        className="page__text policy__body"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      >
        <div>
          <h2 className="policy__heading">
            What We Collect
          </h2>
          <p>
            We collect personal information such as name, email address and any
            other data you provide to us in your messages directly through our
            forms and other contact ways (Contact form, Subscribe to our
            newsletter form, sending us an email or contacting us via phone).
          </p>
          <br />
          <h2 className="policy__heading">
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
          <h2 className="policy__heading">
            Data Security
          </h2>
          <p>
            We use industry-standard measures to secure your personal data and
            protect it from unauthorized access or disclosure. Your data is
            stored in a secured database and a secure document in which only the
            Life Goats core team has access.
          </p>
          <br />
          <h2 className="policy__heading">
            How long we keep your data for
          </h2>
          <p>
            We keep your data only for as long as you allow it. If you request
            us to delete your data or if you unsubscribe from our newsletter,
            all your data will be deleted from our systems.
          </p>
          <br />
          <h2 className="policy__heading">
            GDPR Compliance
          </h2>
          <p>
            We are committed to complying with the General Data Protection
            Regulation (GDPR) to protect your privacy and personal data. Under
            GDPR, you have the following rights regarding your data:
          </p>
          <ul className="policy__list">
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
          <p className="policy__contact">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:lifegoatsconnect@gmail.com"
              className="policy__link"
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
