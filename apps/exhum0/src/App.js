import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import Home from "./pages/Home";
import Music from './pages/Music';
import Contact from './pages/Contact';

// Layouts
// import DefaultLayout from "./layouts/DefaultLayout";
import HomeLayout from "./layouts/HomeLayout";

import './App.css';

function App() {
  useEffect(() => {
      document.title = "exhum0 | Home";
  }, []);
  
  return (
    <Router>
      <NavBar />
      <Routes>
         <Route path="/" element={<HomeLayout><Home /></HomeLayout>} />
        <Route path="/music" element={<Music />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;