import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <Router>
      <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
