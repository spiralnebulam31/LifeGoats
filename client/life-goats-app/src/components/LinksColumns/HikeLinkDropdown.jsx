import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HikeLinkDropdown = ({ active, setActive, handleLinkClick, hikeLinks }) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
          onClick={() => setActive("Hike")}
        >
          The Hike
        </button>
      </div>
      {active === "Hike" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {hikeLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => {
                  handleLinkClick(link);
                }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HikeLinkDropdown;
