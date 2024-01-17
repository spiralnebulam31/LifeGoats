import { motion } from "framer-motion";
import { mobileNav, linkReveal, listItem } from "../../motion/motion";
import { homeLinks } from "../../constants/navLinks";

const MobileMenu = ({ active, setActive, mobile, setMobile }) => {
  return (
    <motion.div
      className="flex lg:hidden absolute right-0 top-0 bottom-0 w-[60%] h-screen mx-0 my-0
        z-10 flex-col items-end gap-60"
      variants={mobileNav}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <motion.div
        className="list-none font-links font-bold flex flex-col justify-center text-center items-center gap-6 bg-background px-16 w-[90%] h-screen"
        variants={linkReveal}
        initial="initial"
        animate="animate"
      >
        {homeLinks.map((link) => (
          <motion.div
            key={link.id}
            variants={listItem}
            className={`${
              active === link.title
                ? "text-secondary underline"
                : "text-primary"
            } hover:text-tertiary text-[20px] hover:text-[24px] font-medium cursor-pointer leading-7 w-[86px]`}
            onClick={() => {
              setMobile(!mobile);
              setActive(link.title);
              window.scrollTo(0, 0);
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
