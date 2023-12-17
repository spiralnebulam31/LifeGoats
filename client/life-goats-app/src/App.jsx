import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer';

function App() {

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

  return (
    <Router>
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer modalState={modalState} setModalState={setModalState} closeModal={closeModal} />
      </div>
    </Router>
  );
}

export default App;
