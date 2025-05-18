import { Routes, Route } from 'react-router-dom';

import './App.css';
import HeroSection from './pages/HeroSection';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import Call from './pages/Call';
import Timeline from './pages/Timeline';
import Services from './pages/Services';
import FormInquiry from './pages/FormInquiry';

function App() {
  return (
    <Routes>
      {/* Homepage route */}
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <Timeline />
            <Services />
            <Pricing />
            <Faq />
            <Call />
          </>
        }
      />

      {/* Form Inquiry page */}
      <Route path="/form-inquiry" element={<FormInquiry />} />
    </Routes>
  );
}

export default App;
