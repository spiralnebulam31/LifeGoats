'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { homeLinks, aboutLinks, eventsLinks, hikeLinks } from "../../../data/navLinks";
import { lifeGoatsLogo, menuMountain, menuClose } from "@/public/assets";
import MobileMenu from "./MobileMenu";
import { HomeLinksDropdown, AboutLinksDropdown, EventsLinksDropdown, HikeLinksDropdown } from "../LinksColumns";

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
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 z-50 bg-background shadow-xl px-6 py-2 h-[75px]"
    >
      <div className="flex w-full mx-auto justify-between gap-20">
        <div className="flex justify-start">
          <Link 
            href="/"
            className="flex flex-row items-center justify-start gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Image
              src={lifeGoatsLogo}
              alt="logo"
              className="h-[65px] w-auto cursor-pointer object-contain pb-1"
              width={85}
              height={85}
            />
            <p className="text-primary text-[26px] font-title cursor-pointer lg:block hidden">
              Life Goats
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <div className="hidden lg:flex flex-row items-center justify-end gap-10">
            <HomeLinksDropdown
              active={active}
              setActive={setActive}
              handleLinkClick={handleLinkClick}
              homeLinks={homeLinks}
              className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
            />
            <AboutLinksDropdown
              active={active}
              setActive={setActive}
              handleLinkClick={handleLinkClick}
              aboutLinks={aboutLinks}
              className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
            />
            <EventsLinksDropdown
              active={active}
              setActive={setActive}
              handleLinkClick={handleLinkClick}
              eventsLinks={eventsLinks}
              className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
            />
            <HikeLinksDropdown
              active={active}
              setActive={setActive}
              handleLinkClick={handleLinkClick}
              hikeLinks={hikeLinks}
              className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
            />
            <Link 
              href="/testimonials"
              className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
              onClick={() => {
                setActive("Testimonials");
                window.scrollTo(0, 0);
              }}
            >
              Testimonials
            </Link>
            <Link 
              href="/contact"
              className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
              onClick={() => {
                setActive("Contact");
                window.scrollTo(0, 0);
              }}
            >
              Contact
            </Link>
          </div>
          <div className="lg:hidden flex flex-1 justify-end items-center pb-1">
            <Image
              src={mobile ? menuClose : menuMountain}
              alt="menu"
              className="h-[60px] w-auto cursor-pointer object-contain z-30"
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
                  homeLinks={homeLinks}
                  aboutLinks={aboutLinks}
                  eventsLinks={eventsLinks}
                  hikeLinks={hikeLinks}
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