import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Applicants from './pages/Applicants';
import Employers from './pages/Employers';
import Services from './pages/Services';
import AboutUs from "./pages/AboutUs";
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="employers" element={<Employers />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;