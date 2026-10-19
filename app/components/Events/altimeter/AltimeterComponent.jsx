'use client';

import { motion } from "framer-motion";
import { floatFromLeftAbout, floatFromRightAbout, floatFromDownPreTitle, floatFromDownMainTitle } from "../../../../motion/home-sections";
import AltimeterGraph from "./AltimeterGraph";
import PropTypes from 'prop-types';
import "@/src/scss/components/Events/altimeter/Altimeter.scss";

const Altimeter = ({ 
  ascentData, 
  descentData, 
  showBoth = true 
}) => {
  if (!ascentData || (!showBoth && !descentData)) {
    return null;
  }

  // Check if routes are circular (start and end at same point)
  const isAscentCircular = ascentData?.points && ascentData.points.length > 0 && 
    ascentData.points[0].location === ascentData.points[ascentData.points.length - 1].location;
  const isDescentCircular = descentData?.points && descentData.points.length > 0 && 
    descentData.points[0].location === descentData.points[descentData.points.length - 1].location;
  
  // Determine route titles
  const getRouteTitle = (routeData, index, isCircular) => {
    if (isCircular && showBoth && ascentData && descentData) {
      return index === 0 ? "1st Route" : "2nd Route";
    }
    if (isCircular) return "Circular Route";
    return index === 0 ? "Ascent" : "Descent";
  };
  
  const getRouteDifference = (routeData, index, isCircular) => {
    if (isCircular) return "circular";
    return index === 0 ? "gain" : "loss";
  };

  return (
    <section
      className="altimeter"
    >
      <motion.div className="altimeter__header">
        <motion.p 
          className="altimeter__pretitle"
          variants={floatFromDownPreTitle} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }} 
        >
          A glimpse at
        </motion.p>
        <motion.h2 
          className="altimeter__title"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.3)" }}
          variants={floatFromDownMainTitle} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }}
        >
          Our Hikes
        </motion.h2>
      </motion.div>

      <motion.div
        className="altimeter__graphs"
      >
        {/* Ascent Graph with Totals */}
        <motion.div
          className="altimeter__graph-column"
          variants={floatFromLeftAbout}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          <AltimeterGraph 
            points={ascentData.points}
            title={getRouteTitle(ascentData, 0, isAscentCircular)}
            difference={getRouteDifference(ascentData, 0, isAscentCircular)}
            totalAltitude={ascentData.totals.altitudeGain}
            totalAltitudeLoss={isAscentCircular ? ascentData.totals.altitudeLoss : null}
            distanceCovered={ascentData.totals.distanceCovered}
            isCircular={isAscentCircular}
          />
        </motion.div>

        {/* Descent Graph with Totals */}
        {showBoth && descentData && (
          <motion.div
            className="altimeter__graph-column"
            variants={floatFromRightAbout}
            initial="initial"
            whileInView="animate" 
            viewport={{ once: true }}
          >
            <AltimeterGraph 
              points={descentData.points}
              title={getRouteTitle(descentData, 1, isDescentCircular)}
              difference={getRouteDifference(descentData, 1, isDescentCircular)}
              totalAltitude={isDescentCircular ? descentData.totals.altitudeGain : descentData.totals.altitudeLoss}
              totalAltitudeLoss={isDescentCircular ? descentData.totals.altitudeLoss : null}
              distanceCovered={descentData.totals.distanceCovered}
              isCircular={isDescentCircular}
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

Altimeter.propTypes = {
  ascentData: PropTypes.shape({
    points: PropTypes.arrayOf(PropTypes.shape({
      location: PropTypes.string,
      altitude: PropTypes.number
    })),
    totals: PropTypes.shape({
      altitudeGain: PropTypes.number,
      altitudeLoss: PropTypes.number,
      distanceCovered: PropTypes.number
    })
  }),
  descentData: PropTypes.shape({
    points: PropTypes.arrayOf(PropTypes.shape({
      location: PropTypes.string,
      altitude: PropTypes.number
    })),
    totals: PropTypes.shape({
      altitudeGain: PropTypes.number,
      altitudeLoss: PropTypes.number,
      distanceCovered: PropTypes.number
    })
  }),
  showBoth: PropTypes.bool
};

export default Altimeter;