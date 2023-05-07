import React from "react";
import Hero from "../Components/Hero";
import About from "./About";
import MemberShip from "../Components/MemberShip";
import RoadMap from "../Components/RoadMap";
import FAQ from "../Components/FAQ";
import MarketPlace from "./MarketPlace";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MemberShip />
      <RoadMap />
      <FAQ />
      <MarketPlace />
    </div>
  );
};

export default Home;
