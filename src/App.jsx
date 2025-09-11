import { useState } from 'react'
import './App.css'
//Importing react-router
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
