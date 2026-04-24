import "./App.css";
//Importing react-router
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import FooterComponent from "./components/FooterComponent";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import Feedback from "./pages/Feedback";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/about-us"
          element={
            <AnimatedPage>
              <AboutUs />
            </AnimatedPage>
          }
        />
        <Route
          path="/gallery"
          element={
            <AnimatedPage>
              <Gallery />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact-us"
          element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          }
        />
        <Route
          path="/feedback"
          element={
            <AnimatedPage>
              <Feedback />
            </AnimatedPage>
          }
        />
        <Route
          path="/events"
          element={
            <AnimatedPage>
              <Events />
            </AnimatedPage>
          }
        />
        <Route
          path="/register"
          element={
            <AnimatedPage>
              <Register />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
