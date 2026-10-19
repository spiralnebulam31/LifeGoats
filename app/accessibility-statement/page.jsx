"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import "@/src/scss/pages/Page.scss";
import "@/src/scss/pages/Policy.scss";

// Structure follows the EU model accessibility statement (Implementing
// Decision 2018/1523): compliance status, known limitations, content from
// other sources, how the statement was prepared, and feedback/contact.
// Update the date whenever the site is re-checked.
const STATEMENT_DATE = "19 October 2026";

const AccessibilityStatementPage = () => {
  return (
    <motion.div className="page page--contained page--below-nav">
      <motion.div className="page__heading">
        <motion.h1 className="page__title">Accessibility Statement</motion.h1>
      </motion.div>
      <motion.div
        className="page__text policy__body"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div>
          <p>
            We want lifegoats.com to be usable by as many people as possible,
            including people who use screen readers, keyboard navigation,
            screen magnification or other assistive technologies.
          </p>
          <br />

          <h2 className="policy__heading">Compliance status</h2>
          <p>
            Based on our self-assessment, this website partially meets the{" "}
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
              className="policy__link"
            >
              Web Content Accessibility Guidelines (WCAG) 2.2
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>{" "}
            at level AA. The parts that don&apos;t fully meet it yet are listed
            below under &ldquo;Known limitations&rdquo;.
          </p>
          <br />

          <h2 className="policy__heading">What this means</h2>
          <ul className="policy__list">
            <li>
              Every link and button works with a keyboard and shows a visible
              focus outline, and a &ldquo;Skip to main content&rdquo; link
              comes first on every page.
            </li>
            <li>
              The menus open and close with the keyboard, and close with the
              Escape key. Pop-ups keep keyboard focus inside them while open.
            </li>
            <li>
              Headings, page landmarks, form labels and image descriptions help
              screen reader users find their way around. Purely decorative
              images are hidden from screen readers.
            </li>
            <li>
              Text and links use colours that meet the WCAG AA contrast ratio of
              at least 4.5:1 against the site&apos;s backgrounds.
            </li>
            <li>
              If your device is set to reduce motion, sliding and moving
              animations and smooth scrolling are turned off.
            </li>
            <li>
              The layout adapts to small screens, and text sizes scale with your
              browser&apos;s text size settings.
            </li>
          </ul>
          <br />

          <h2 className="policy__heading">Known limitations</h2>
          <ul className="policy__list">
            <li>
              Some headings are placed over photos, for example at the top of
              the home page and the event pages, so their contrast can vary
              across the image.
            </li>
            <li>
              The event photo galleries use a third-party gallery component
              that hasn&apos;t yet been fully tested with screen readers.
            </li>
            <li>
              The December 2024 newsletter page is an archived copy of an email,
              so its layout is simpler than the rest of the site.
            </li>
          </ul>
          <br />

          <h2 className="policy__heading">Content from other sources</h2>
          <p>
            Some content comes from other services: the location map
            (OpenStreetMap), the newsletter sign-up form (Kit), and links to
            Google Maps, Instagram and WhatsApp. These are outside our control
            and may not meet the same standard.
          </p>
          <br />

          <h2 className="policy__heading">How this was assessed</h2>
          <p>
            We carried out a self-assessment on {STATEMENT_DATE}. It combined a
            review of the website&apos;s code against the WCAG 2.2 AA criteria
            with contrast measurements of the site&apos;s text and background
            colours.
          </p>
          <br />

          <h2 className="policy__heading">Feedback and contact</h2>
          <p>
            If something on this site doesn&apos;t work for you, or you need
            any content in a different format, please email{" "}
            <a
              href="mailto:anastasiaadamoudi@gmail.com?subject=Life%20Goats%20accessibility%20feedback"
              className="policy__link"
            >
              anastasiaadamoudi@gmail.com
            </a>
            . We aim to reply within 5 working days.
          </p>

          <p className="policy__meta">
            Prepared on {STATEMENT_DATE}. Last reviewed on {STATEMENT_DATE}.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AccessibilityStatementPage;
