import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutUsComponent from "../components/AboutUsComponent";
import UpComingEventComponent from "../components/UpComingEventComponent";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);  
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutUsComponent />
      <UpComingEventComponent />
    </div>
  );
}

export default Home;
