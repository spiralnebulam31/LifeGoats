'use client';

import { useState, useRef, useEffect } from "react";
import Head from 'next/head';
import { Navbar, Footer } from "../components";
import { lifeGoatsLogo } from "../assets";
import MediaQuery from "react-responsive";
import "../styles/globals.css";

const Layout = ({ children }) => {
  const isSmallScreen = MediaQuery({ query: "(max-width: 768px)" });

  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(2);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const [modalState, setModalState] = useState({
    privacyOpen: false,
    accessibilityOpen: false,
  });

  const closeModal = () => {
    setModalState({
      privacyOpen: false,
      accessibilityOpen: false,
    });
  };

  const [phoneIsHovered, setPhoneIsHovered] = useState(false);
  const [emailIsHovered, setEmailIsHovered] = useState(false);
  const [email2IsHovered, setEmail2IsHovered] = useState(false);

  const handlePhoneMouseEnter = () => {
    setPhoneIsHovered(true);
  };

  const handlePhoneMouseLeave = () => {
    setPhoneIsHovered(false);
  };

  const handleEmailMouseEnter = () => {
    setEmailIsHovered(true);
  };

  const handleEmailMouseLeave = () => {
    setEmailIsHovered(false);
  };

  const handleEmail2MouseEnter = () => {
    setEmail2IsHovered(true);
  };

  const handleEmail2MouseLeave = () => {
    setEmail2IsHovered(false);
  };

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/life-goats-icon.svg" />
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Catamaran&family=Cinzel:wght@500&family=Lilita+One&family=Luckiest+Guy&family=Neucha&family=Open+Sans:wght@800&family=Road+Rage&family=Rubik:wght@900&display=swap');
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 60px;
          }`}
        </style>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A community and event series for people centered professionals who value relationship building and spending quality time together in the great outdoors." />
        <meta name="theme-color" content="#e6ecf0" />
        <meta name="keywords" content="Life Goats, life goats, outdoor events, community, relationship building, people centered professionals, great outdoors, Mount Olympus" />
        <meta property="og:title" content="Life Goats: A community and event series for people centered professionals who value relationship building and spending quality time together in the great outdoors" />
        <meta property="og:description" content="Our goal is to help each other press pause on the momentum of daily life, come together, connect, brainstorm, recharge and enjoy reinventing ourselves. As people-centered professionals, our performance depends on that." />
        <meta property="og:image" content="/herd.JPG" />
        <meta property="og:url" content="https://www.lifegoats.com/" />
        <meta property="og:type" content="website" />
        <title>Life Goats</title>
      </Head>
      <body>
        {preloader ? (
          <div className="bg-cover bg-n-repeat bg-center bg-background flex flex-col justify-center items-center h-screen w-screen overflow-hidden">
            <img
              src={lifeGoatsLogo}
              alt="logo"
              className="w-[200px] h-auto animate-pulse"
            />
            <h1 className="text-3xl text-primary font-bold">Life Goats Loading</h1>
          </div>
        ) : (
          <div id="scroll-container" className="bg-cover bg-n-repeat bg-center overflow-hidden">
            <Navbar />
            {children}
            <Footer
              modalState={modalState}
              setModalState={setModalState}
              closeModal={closeModal}
            />
          </div>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Life Goats",
          "url": "https://www.lifegoats.com/",
          "logo": "https://www.lifegoats.com/life-goats-icon.svg",
          "description": "A community and event series for people centered professionals who value relationship building and spending quality time together in the great outdoors. Our goal is to help each other press pause on the momentum of daily life, come together, connect, brainstorm, recharge and enjoy reinventing ourselves. As people-centered professionals, our performance depends on that."
        })}} />
      </body>
    </html>
  );
};

export default Layout;