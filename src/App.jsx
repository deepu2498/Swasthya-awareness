import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here for other pages, like About */}
      <Route path="/about" element={<About />} /> 
    </Routes>
    <Footer />
  </Router>
);
export default App
