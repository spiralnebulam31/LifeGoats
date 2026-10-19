'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import "@/src/scss/components/TheHike/NeededItemsText.scss";

const NeededItemsText = () => {
  return (
    <motion.div
      className="needed-items"
      variants={fadeIn}
      initial="initial"
      whileInView="animate" 
viewport={{ once: true }}
    >
      <p>The mountain has its quirks just as every hiker has their own 😉</p>
      <br />
      <p>
        Based on our experience, we are recommending the following list of
        needed items for a 2-3 hike with 1-2 nights spent at a mountain
        refuge.
      </p>
      <br />
      <p>
        Although October is typically fair weathered, never underestimate the
        mountain! It is not always sunny on the mountain, even during the
        summer, and especially the upper parts of the mountain can disappear in
        thick clouds really quickly and temperatures do still drop below 0°C at
        night towards the top of high mountains like Mount Olympus.
      </p>
      <br />
      <div className="needed-items__highlight">
        Therefore, it is important to come prepared as we will!
      </div>
      <br />
      <br />
      <h2 className="needed-items__heading">
        Basic mountain hiking gear
      </h2>
      <br />
      <ul className="needed-items__list">
        <li>
          🐐 A comfortable 45-50 liter{" "}
          <span className="needed-items__bold">backpack</span>
        </li>
        <li>
          🐐 A good pair of broken in waterproof{" "}
          <span className="needed-items__bold">hiking boots</span> to protect your feet
          and keep your ankles supported and stable.
        </li>
        <li>
          🐐 A pair of <span className="needed-items__bold">baton sticks</span> (while
          not absolutely necessary, they help keep you steady and tremendously
          save your knees during your descent)
        </li>
        <li>
          🐐 <span className="needed-items__bold">Helmets</span> for those planning on
          summiting to the Mitikas peak - the last 40 minutes to the peak are a
          rock scramble with the danger of loose rocks falling from above, so
          head protection is a MUST!
        </li>
        <li>
          🐐 2 pairs of <span className="needed-items__bold">wool socks</span> and 2
          pairs of <span className="needed-items__bold">underwear</span>!!
        </li>
        <li>
          🐐 <span className="needed-items__bold">Gloves</span>, a{" "}
          <span className="needed-items__bold">winter hat</span> and{" "}
          <span className="needed-items__bold">neck buff</span>
        </li>
        <li>
          🐐 <span className="needed-items__bold">Cap</span> or{" "}
          <span className="needed-items__bold">sunhat</span> and a light{" "}
          <span className="needed-items__bold">neck buff</span>
        </li>
        <li>
          🐐 <span className="needed-items__bold">Sunglasses</span>
        </li>
        <li>
          🐐 <span className="needed-items__bold">Sunscreen</span>
        </li>
        <li>
          🐐 <span className="needed-items__bold">Head lamp</span>
        </li>
        <li>
          🐐 <span className="needed-items__bold">Personal pharmacy</span>
          <p>
            <span className="needed-items__note">Note:</span> We will have a group first aid
            kit with us, but if you have any specific requirements (allergy
            medicine, inhalers etc) do bring those and also let us know.
          </p>
        </li>
        <li>
          🐐 <span className="needed-items__bold">Personal items/toiletries</span>{" "}
          (toothbrush, wet wipes, Kleenex etc)
          <p>
            <span className="needed-items__note">Note:</span> There are no showers at the
            refuge, just clean toilets and sinks with defrosted mountain water
          </p>
        </li>
        <li>
          🐐 <span className="needed-items__bold">Waste bag</span> (a simple plastic bag
          or two to keep any waste we create and carry it back down with us)
        </li>

        <li>
          🐐 An easily packable <span className="needed-items__bold">sleeping bag</span>{" "}
          if you have one.
          <p>
            Otherwise you will need a <span className="needed-items__bold">sheet</span>{" "}
            and <span className="needed-items__bold">pillowcase</span> as the refuge only
            provides clean blankets and requires visitors supply personal
            bedwear.
          </p>
        </li>
        <li>
          🐐 <span className="needed-items__bold">Isothermal underwear</span> (for torso
          and legs)
          <p>
            <span className="needed-items__note">Note:</span> You will likely not use this
            at all given the time of year, but it&apos;s always good to come prepared and
            these double up in use as sleepwear at the refuge.
          </p>
        </li>
      </ul>
      <br />
      <br />
      <h2 className="needed-items__heading">
        For the torso
      </h2>
      <br />
      <ul className="needed-items__list">
        <li>
          🐐 Synthetic short sleeved <span className="needed-items__bold">T-shirt</span>{" "}
          that dries quickly + an optional fresh change for day 2 on the
          mountain
        </li>
        <li>
          🐐 A <span className="needed-items__bold">baselayer</span> - thermal long
          sleeved shirt
        </li>
        <li>
          🐐 A <span className="needed-items__bold">middle layer</span> - jacket or
          sweatshirt of some sort
        </li>
        <li>
          🐐 A waterproof and windproof <span className="needed-items__bold">coat</span>
        </li>
        <p>
          <span className="needed-items__note">Note:</span> Personally, I prefer a fleece zip
          up sweater and a gortex material waterproof windbreaker shell jacket
          for this time of year.
        </p>
      </ul>
        <br />
        <br />
      <h2 className="needed-items__heading">
        For the legs
      </h2>
      <br />
      <ul className="needed-items__list">
        <li>
          🐐 <span className="needed-items__bold">Dungarees</span> - waterproof
          breathable goretex membrane
        </li>
        <li>
          🐐 A pair of athletic <span className="needed-items__bold">shorts</span> - in
          case it is too hot at times for long pants
        </li>
      </ul>
      <br />
      <br />
      <div className="needed-items__highlight">
        Think LAYERS that you can easily put on or take off during the hike as
        needed.
      </div>
      {/* <br />
      <br />
      <p>
        🐐 We will also be carrying with us adequate{" "}
        <span className="needed-items__bold">water</span> and{" "}
        <span className="needed-items__bold">food supplies</span> that we will provide, so
        if you have <span className="needed-items__bold">reusable bottles</span>, do
        bring them.{" "}
      </p> */}
      <br />
      <br />
      <div className="needed-items__highlight needed-items__highlight--stacked">
        <p>
          If you don’t have some of the above or need extra information, fear
          not! We will find a solution and spare equipment to lend.
        </p>
        <br />
        <p>Just let us know ahead of time.</p>
        <br />
        <p>We are here for you 🐐 🐐 🐐</p>
      </div>
    </motion.div>
  );
};

export default NeededItemsText;
