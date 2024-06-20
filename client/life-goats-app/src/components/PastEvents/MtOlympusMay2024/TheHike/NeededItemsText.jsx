import { motion } from "framer-motion";
import { fadeIn } from "../../../../motion/motion";

const NeededItemsText = () => {
  return (
    <motion.div
      className="bg-background flex flex-col justify-center text-center mx-auto pt-10 pb-8 font-body lg:text-lg text-md w-[90%]"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
    >
      <p>The mountain has its quirks just as every hiker has their own 😉</p>
      <br />
      <p>
        Based on our experience, we are recommending the following list of
        needed items for our two-day hike with a night spent at Apostolidis
        refuge.
      </p>
      <br />
      <p>
        Although late May is typically fair weathered, never underestimate the
        mountain! It is not always sunny on Mount Olympus, even during the
        summer, and especially the upper parts of the mountain can disappear in
        thick clouds really quickly and temperatures do still drop below 0°C at
        night towards the top.
      </p>
      <br />
      <div className="flex justify-center mx-auto bg-tertiaryLight">
        Therefore, it is important to come prepared as we will!
      </div>
      <br />
      <br />
      <h2 className="text-xl font-subtitle font-bold text-tertiary mb-2">
        Basic mountain hiking gear
      </h2>
      <br />
      <ul className="text-left">
        <li>
          🐐 A comfortable 45-50 liter{" "}
          <span className="font-bold">backpack</span>
        </li>
        <li>
          🐐 A good pair of broken in waterproof{" "}
          <span className="font-bold">hiking boots</span> to protect your feet
          and keep your ankles supported and stable.
        </li>
        <li>
          🐐 A pair of <span className="font-bold">baton sticks</span> (while
          not absolutely necessary, they help keep you steady and tremendously
          save your knees during your descent)
        </li>
        <li>
          🐐 <span className="font-bold">Helmets</span> for those planning on
          summiting to the Mitikas peak - the last 40 minutes to the peak are a
          rock scramble with the danger of loose rocks falling from above, so
          head protection is a MUST!
        </li>
        <li>
          🐐 2 pairs of <span className="font-bold">wool socks</span> and 2
          pairs of <span className="font-bold">underwear</span>!!
        </li>
        <li>
          🐐 <span className="font-bold">Gloves</span>, a{" "}
          <span className="font-bold">winter hat</span> and{" "}
          <span className="font-bold">neck buff</span>
        </li>
        <li>
          🐐 <span className="font-bold">Cap</span> or{" "}
          <span className="font-bold">sunhat</span> and a light{" "}
          <span className="font-bold">neck buff</span>
        </li>
        <li>
          🐐 <span className="font-bold">Sunglasses</span>
        </li>
        <li>
          🐐 <span className="font-bold">Sunscreen</span>
        </li>
        <li>
          🐐 <span className="font-bold">Head lamp</span>
        </li>
        <li>
          🐐 <span className="font-bold">Personal pharmacy</span>
          <p>
            <span className="italic">Note:</span> We will have a group first aid
            kit with us, but if you have any specific requirements (allergy
            medicine, inhalers etc) do bring those and also let us know.
          </p>
        </li>
        <li>
          🐐 <span className="font-bold">Personal items/toiletries</span>{" "}
          (toothbrush, wet wipes, Kleenex etc)
          <p>
            <span className="italic">Note:</span> There are no showers at the
            refuge, just clean toilets and sinks with defrosted mountain water
          </p>
        </li>
        <li>
          🐐 <span className="font-bold">Waste bag</span> (a simple plastic bag
          or two to keep any waste we create and carry it back down with us)
        </li>

        <li>
          🐐 An easily packable <span className="font-bold">sleeping bag</span>{" "}
          if you have one.
          <p>
            Otherwise you will need a <span className="font-bold">sheet</span>{" "}
            and <span className="font-bold">pillowcase</span> as the refuge only
            provides clean blankets and requires visitors supply personal
            bedwear.
          </p>
        </li>
        <li>
          🐐 <span className="font-bold">Isothermal underwear</span> (for torso
          and legs)
          <p>
            <span className="italic">Note:</span> You will likely not use this
            at all given the time of year, but it's always good to come prepared and
            these double up in use as sleepwear at the refuge.
          </p>
        </li>
      </ul>
      <br />
      <br />
      <h2 className="text-xl font-subtitle font-bold text-tertiary mb-2">
        For the torso
      </h2>
      <br />
      <ul className="text-left">
        <li>
          🐐 Synthetic short sleeved <span className="font-bold">T-shirt</span>{" "}
          that dries quickly + an optional fresh change for day 2 on the
          mountain
        </li>
        <li>
          🐐 A <span className="font-bold">baselayer</span> - thermal long
          sleeved shirt
        </li>
        <li>
          🐐 A <span className="font-bold">middle layer</span> - jacket or
          sweatshirt of some sort
        </li>
        <li>
          🐐 A waterproof and windproof <span className="font-bold">coat</span>
        </li>
        <p>
          <span className="italic">Note:</span> Personally, I prefer a fleece zip
          up sweater and a gortex material waterproof windbreaker shell jacket
          for this time of year.
        </p>
      </ul>
        <br />
        <br />
      <h2 className="text-xl font-subtitle font-bold text-tertiary mb-2">
        For the legs
      </h2>
      <br />
      <ul className="text-left">
        <li>
          🐐 <span className="font-bold">Dungarees</span> - waterproof
          breathable goretex membrane
        </li>
        <li>
          🐐 A pair of athletic <span className="font-bold">shorts</span> - in
          case it is too hot at times for long pants
        </li>
      </ul>
      <br />
      <br />
      <div className="flex justify-center mx-auto bg-tertiaryLight">
        Think LAYERS that you can easily put on or take off during the hike as
        needed.
      </div>
      <br />
      <br />
      <p>
        🐐 We will also be carrying with us adequate{" "}
        <span className="font-bold">water</span> and{" "}
        <span className="font-bold">food supplies</span> that we will provide, so
        if you have <span className="font-bold">reusable bottles</span>, do
        bring them.{" "}
      </p>
      <br />
      <br />
      <div className="flex flex-col justify-center mx-auto bg-tertiaryLight">
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
