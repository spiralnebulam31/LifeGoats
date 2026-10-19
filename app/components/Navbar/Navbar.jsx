'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { aboutLinks, eventsLinks } from "../../../data/navLinks";
import { lifeGoatsLogo, menuMountain, menuClose } from "@/src/assets";
import MobileMenu from "./MobileMenu";
import { AboutLinksDropdown, EventsLinksDropdown } from "../LinksColumns";
import "@/src/scss/components/Navbar/Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);
  const [targetSection, setTargetSection] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (link) => {
    setActive(link.title);
    if (pathname !== "/") {
      router.push("/");
    }
    setTargetSection(link.id);
  };

  useEffect(() => {
    if (targetSection && pathname === "/") {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTargetSection(null);
      }
    }
  }, [targetSection, pathname]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY <= lastScrollY || currentScrollY < 500); // Show navbar when scrolling up or near the top
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, handleScroll]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className="navbar"
    >
      <div className="navbar__inner">
        <div className="navbar__brand">
          <Link
            href="/"
            className="navbar__home-link"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Image
              src={lifeGoatsLogo}
              alt="logo"
              className="navbar__logo"
              width={85}
              height={85}
            />
            <p className="navbar__title">
              Life Goats
            </p>
          </Link>
        </div>
        <div className="navbar__menu">
          <div className="navbar__links">
            <AboutLinksDropdown
              active={active}
              setActive={setActive}
              handleLinkClick={handleLinkClick}
              aboutLinks={aboutLinks}
            />
            <EventsLinksDropdown
              active={active}
              setActive={setActive}
              handleLinkClick={handleLinkClick}
              eventsLinks={eventsLinks}
            />
            <Link
              href="/testimonials"
              className="navbar__link"
              onClick={() => {
                setActive("Testimonials");
                window.scrollTo(0, 0);
              }}
            >
              Testimonials
            </Link>
            <Link 
              href="/contact"
              className="navbar__link"
              onClick={() => {
                setActive("Contact");
                window.scrollTo(0, 0);
              }}
            >
              Contact
            </Link>
          </div>
          <div className="navbar__toggle">
            <Image
              src={mobile ? menuClose : menuMountain}
              alt="menu"
              className="navbar__toggle-icon"
              onClick={() => setMobile(!mobile)}
              width={85}
              height={85}
            />
          </div>
          <motion.div>
            <AnimatePresence>
              {mobile && (
                <MobileMenu
                  key="mobile-menu-animation"
                  active={active}
                  setActive={setActive}
                  mobile={mobile}
                  setMobile={setMobile}
                  aboutLinks={aboutLinks}
                  eventsLinks={eventsLinks}
                  handleLinkClick={handleLinkClick}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        </div>
    </motion.nav>
  );
};

export default Navbar;