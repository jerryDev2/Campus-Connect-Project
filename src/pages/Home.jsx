import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutUsComponent from "../components/AboutUsComponent";
import UpComingEventComponent from "../components/UpComingEventComponent";

function Home() {
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
