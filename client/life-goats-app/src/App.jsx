import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Navbar, Footer } from "./components/index";
import { 
  LandingPage, 
  TheHistory, 
  TheTeam,
  PastEvents, 
  UpcomingEvents, 
  MtOlympusMay2024, 
  Contact,
  TestimonialsPage
} from "./pages/index";
import { lifeGoatsLogo } from "./assets/index.js";
import MediaQuery from "react-responsive";


const App = () => {

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


  return preloader ? (
    <div className="bg-cover bg-n-repeat bg-center bg-background flex flex-col justify-center items-center h-screen w-screen overflow-hidden">
      <img
        src={lifeGoatsLogo}
        alt="logo"
        className="w-[200px] h-auto animate-pulse"
      />
      <h1 className="text-3xl text-primary font-bold">Life Goats Loading</h1>
    </div>
  ) : (
    <Router>
      <div
        id="scroll-container"
        className="bg-cover bg-n-repeat bg-center overflow-hidden"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage preloader={preloader} isSmallScreen={isSmallScreen} />} isSmallScreen={isSmallScreen} phoneIsHovered={phoneIsHovered} handlePhoneMouseEnter={handlePhoneMouseEnter} handlePhoneMouseLeave={handlePhoneMouseLeave} emailIsHovered={emailIsHovered} handleEmailMouseEnter={handleEmailMouseEnter} handleEmailMouseLeave={handleEmailMouseLeave} email2IsHovered={email2IsHovered} handleEmail2MouseEnter={handleEmail2MouseEnter} handleEmail2MouseLeave={handleEmail2MouseLeave} />
          <Route path="/about/history" element={<TheHistory />} isSmallScreen={isSmallScreen} />
          <Route path="/about/team" element={<TheTeam />} isSmallScreen={isSmallScreen} />
          <Route path="/events/past" element={<PastEvents />} isSmallScreen={isSmallScreen} />
          <Route path="/events/past/mt-olympus-may-2024" element={<MtOlympusMay2024 />} isSmallScreen={isSmallScreen} />
          <Route path="/events/upcoming" element={<UpcomingEvents />} isSmallScreen={isSmallScreen} />
          <Route path="/contact" element={<Contact />} isSmallScreen={isSmallScreen} phoneIsHovered={phoneIsHovered} handlePhoneMouseEnter={handlePhoneMouseEnter} handlePhoneMouseLeave={handlePhoneMouseLeave} emailIsHovered={emailIsHovered} handleEmailMouseEnter={handleEmailMouseEnter} handleEmailMouseLeave={handleEmailMouseLeave} email2IsHovered={email2IsHovered} handleEmail2MouseEnter={handleEmail2MouseEnter} handleEmail2MouseLeave={handleEmail2MouseLeave} />
          <Route path="/testimonials" element={<TestimonialsPage />} isSmallScreen={isSmallScreen} />
        </Routes>
        <Footer
          modalState={modalState}
          setModalState={setModalState}
          closeModal={closeModal}
        />
      </div>
    </Router>
  );
};

export default App;
