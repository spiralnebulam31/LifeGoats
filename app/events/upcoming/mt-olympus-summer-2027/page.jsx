'use client';

import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../motion/motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../../motion/home-sections";
import { Hero } from "../../../components/Events";
import {
  summer2027Hero,
  summer2027Intro,
  summer2027Facts,
  summer2027Plans,
  summer2027Practical,
  summer2027Photos,
} from "../../../../data/mt-olympus-summer-2027";
import "@/src/scss/pages/Landing.scss";
import "@/src/scss/pages/events/UpcomingRetreat.scss";

const SectionHeader = ({ pretitle, title, id }) => (
  <div className="retreat__header">
    <motion.p
      className="retreat__pretitle"
      variants={floatFromDownPreTitle}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {pretitle}
    </motion.p>
    <motion.h2
      id={id}
      className="retreat__title"
      variants={floatFromDownMainTitle}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  </div>
);

const PlanCard = ({ plan }) => (
  <motion.article
    className={`retreat-plan ${plan.featured ? "retreat-plan--featured" : ""}`}
    aria-labelledby={`${plan.id}-title`}
    variants={fadeIn}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <div className="retreat-plan__media">
      <Image
        src={plan.image}
        alt={plan.imageAlt}
        className="retreat-plan__image"
        sizes={plan.featured ? "(min-width: 1200px) 50vw, 100vw" : "(min-width: 900px) 45vw, 100vw"}
      />
    </div>
    <div className="retreat-plan__body">
      <p className="retreat-plan__label">
        {plan.label}
        {plan.featured && <span className="retreat-plan__badge">Main plan</span>}
      </p>
      <h3 id={`${plan.id}-title`} className="retreat-plan__title">{plan.title}</h3>
      <p className="retreat-plan__tagline">{plan.tagline}</p>
      <p className="retreat-plan__summary">{plan.summary}</p>

      {plan.points && (
        <ul className="retreat-plan__list">
          {plan.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

      {plan.days && (
        <details className="retreat-plan__days">
          <summary className="retreat-plan__days-toggle">See the day-by-day plan</summary>
          {plan.days.map((day) => (
            <div key={day.title} className="retreat-plan__day">
              <h4 className="retreat-plan__day-title">{day.title}</h4>
              <ul className="retreat-plan__list">
                {day.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </details>
      )}
    </div>
  </motion.article>
);

SectionHeader.propTypes = {
  pretitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

PlanCard.propTypes = {
  plan: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    image: PropTypes.object.isRequired,
    imageAlt: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string),
    days: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        points: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ),
  }).isRequired,
};

const MtOlympusSummer2027 = () => {
  return (
    <div className="landing landing--footer-gap">
      <Hero
        image={summer2027Hero.image}
        locationTitle={summer2027Hero.locationTitle}
        date={summer2027Hero.date}
        p1={summer2027Hero.p1}
        p2={summer2027Hero.p2}
        slider={false}
      />

      {/* Welcome */}
      <section className="retreat retreat--to-sky" aria-labelledby="retreat-welcome">
        <SectionHeader pretitle="Summer 2027" title="Welcome" id="retreat-welcome" />
        <div className="retreat-intro">
          <motion.div
            className="retreat-intro__media"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Image
              src={summer2027Intro.image}
              alt={summer2027Intro.imageAlt}
              className="retreat-intro__image"
              sizes="(min-width: 1200px) 45vw, 90vw"
            />
          </motion.div>
          <motion.div
            className="retreat-intro__text"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {summer2027Intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="retreat-intro__highlight">
              <h3 className="retreat-intro__highlight-title">{summer2027Intro.highlight.title}</h3>
              <p>{summer2027Intro.highlight.text}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* At a glance */}
      <section className="retreat retreat--from-sky" aria-labelledby="retreat-glance">
        <SectionHeader pretitle="The retreat" title="At a glance" id="retreat-glance" />
        <dl className="retreat-facts">
          {summer2027Facts.map((fact) => (
            <motion.div
              key={fact.label}
              className="retreat-facts__item"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <dt className="retreat-facts__label">{fact.label}</dt>
              <dd className="retreat-facts__value">{fact.value}</dd>
              <dd className="retreat-facts__note">{fact.note}</dd>
            </motion.div>
          ))}
        </dl>
      </section>

      {/* Plans */}
      <section className="retreat" aria-labelledby="retreat-plans">
        <SectionHeader pretitle="Choose your own pace" title="The plans" id="retreat-plans" />
        <p className="retreat__lead">
          Everyone is welcome to stay at the lower altitudes for the whole
          retreat. The higher route is there for anyone who wants it.
        </p>
        <div className="retreat-plans">
          {summer2027Plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Practical information */}
      <section className="retreat retreat--to-sky" aria-labelledby="retreat-practical">
        <SectionHeader pretitle="Good to know" title="Travel and stay" id="retreat-practical" />
        <div className="retreat-practical">
          {summer2027Practical.map((item) => (
            <motion.div
              key={item.title}
              className="retreat-practical__item"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="retreat-practical__title">{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photos */}
      <section className="retreat retreat--from-sky" aria-labelledby="retreat-photos">
        <SectionHeader pretitle="From our past retreats" title="A taste of the mountain" id="retreat-photos" />
        <ul className="retreat-photos">
          {summer2027Photos.map((photo) => (
            <li key={photo.alt} className="retreat-photos__item">
              <Image
                src={photo.image}
                alt={photo.alt}
                className="retreat-photos__image"
                sizes="(min-width: 1200px) 25vw, (min-width: 600px) 50vw, 100vw"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Get in touch */}
      <section className="retreat retreat--closing" aria-labelledby="retreat-contact">
        <SectionHeader pretitle="Interested?" title="Join us" id="retreat-contact" />
        <p className="retreat__lead">
          If you&apos;d like to join, or have any questions, we&apos;d love to
          hear from you. You can also find out more about Life Goats on the
          rest of our website.
        </p>
        <div className="retreat__actions">
          <Link href="/contact" className="retreat__cta">Get in touch</Link>
          <Link href="/" className="retreat__cta retreat__cta--secondary">About Life Goats</Link>
        </div>
        <p className="retreat__signature">With love, Anastasia and Maria</p>
      </section>
    </div>
  );
};

export default MtOlympusSummer2027;
