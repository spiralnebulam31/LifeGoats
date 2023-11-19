import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-x-hidden">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
