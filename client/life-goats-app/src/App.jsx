import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Navbar, Footer } from "./components/index";
import { LandingPage, TheRoute, NeededItems, SafetyConsiderations, TheHistory, Contact } from "./pages/index";
import { lifeGoatsLogo } from "./assets/index.js";

const App = () => {

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
          <Route path="/" element={<LandingPage preloader={preloader} />} />
          <Route path="/the-route" element={<TheRoute />} />
          <Route path="/needed-items" element={<NeededItems />} />
          <Route path="/safety-considerations" element={<SafetyConsiderations />} />
          <Route path="/the-history" element={<TheHistory />} />
          <Route path="/contact" element={<Contact />} />
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
