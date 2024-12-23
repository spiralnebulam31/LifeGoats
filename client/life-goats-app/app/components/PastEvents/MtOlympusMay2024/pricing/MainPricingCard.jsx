import { AnimatePresence, motion } from "framer-motion";
import { locationIcon, priceIcon2 } from "@/public/assets";
import { fadeIn } from "../../../../../motion/motion";

const MainPricingCard = ({
  index,
  title,
  accommodation,
  link,
  alt,
  location,
  pricePerNight,
  priceForFiveNights,
  notes,
  isOpen,
  toggleOpen,
}) => {
  return (
    <motion.div
      key={index}
      className="flex flex-col justify-start pt-5 mx-auto bg-background rounded-2xl drop-shadow-xl text-primary
            font-body md:text-[16px] text-[14px] w-[250px] h-auto min-h-[340px]"
    >
      <p className="pb-4 text-center text-bold text-tertiary uppercase font-links font-bold text-3xl">
        🐐{title}
      </p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          alt={alt}
          className="pb-4 text-center text-bold text-primary hover:text-secondary cursor-pointer visited:text-earth font-body underline font-bold text-lg"
        >
          {accommodation}
        </a>
      ) : (
        <p className="pb-4 text-center text-bold text-primary font-body font-bold text-lg">
          {accommodation}
        </p>
      )}

      <div className="flex flex-row justify-center items-center pb-4">
        <img
          src={locationIcon}
          alt="location of accommodation icon"
          className="w-[20px] h-auto mr-1"
        />
        <p className="text-center text-bold text-primary font-body text-md">
          {location}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center pb-3">
        <div className="flex flex-row justify-center items-center">
          <img
            src={priceIcon2}
            alt="price icon"
            className="w-[30px] h-auto mr-1"
          />
          <p className="pb-1 text-center text-bold text-primary font-body text-md">
            from
          </p>
        </div>
        <p className="pb-1 text-center font-bold text-primary font-body text-4xl">
          {pricePerNight}
        </p>
        <p className="pb-1 text-center text-primary font-body text-md">
          per night
        </p>
        <p className="pb-2 text-center text-primary font-body text-md">
          (<span className="font-bold">{priceForFiveNights}</span> for 5 nights)
        </p>
      </div>

      {!isOpen && (
        /* Read More Link */
        <div className="flex w-full mx-auto items-center justify-center text-center">
          <p
            className="text-primary hover:text-secondary underline font-light text-[14px] cursor-pointer"
            onClick={toggleOpen}
            alt="click to read more"
          >
            read more
          </p>
        </div>
      )}

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            variants={{
              open: { width: "100%", right: "0", zIndex: 2 },
              closed: { width: "100%", right: "0", zIndex: 1 },
            }}
          >
            {/* Rest of the expanded content */}
            <motion.div
              className="flex flex-col w-[90%] mx-auto"
              variants={fadeIn}
            >
              {notes && (
                <ul className="pb-2 text-center text-bold text-primary font-body text-md">
                  {notes.map((note, index) => (
                    <li key={index}>➤ {note}</li>
                  ))}
                </ul>
              )}

              {/* Read Less Link */}
              <div className="flex w-full mx-auto items-center justify-center text-center pb-4">
                <p
                  className="text-primary hover:text-secondary underline font-light text-[14px] cursor-pointer"
                  onClick={toggleOpen}
                  alt="click to read less"
                >
                  read less
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MainPricingCard;
