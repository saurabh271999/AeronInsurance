import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Hero from './component/Hero';
import WhyChooseUs from './component/WhyChoose';
import BestService from './component/BestService';
import Partner from './component/Partner';
import Service from './component/Services';
import HowWeWorks from './component/HowWeWork';
import Testimonials from './component/Testimonials';
import Bluesection from './component/Bluesection';
import Faq from './component/Faq';
import Footer from './component/Footer';
import Login from './Login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Hero />
              <WhyChooseUs />
              <BestService />
              <Partner />
              <Service />
              <HowWeWorks />
              <Testimonials />
              <Bluesection />
              <Faq />
              <Footer />
            </>
          }
        />

       
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
