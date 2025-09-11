import { useState } from 'react'
import './App.css'
//Importing react-router
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'
import FooterComponent from './components/FooterComponent'
import Register from './pages/Register'
import Gallery from './pages/Gallery'
import Feedback from './pages/Feedback'
import Events from './pages/Events'
import Contact from './pages/Contact'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/events" element={<Events />} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  );
}

export default App
