import React from "react";
import Hero from "../Components/Hero";
import About from "./About";
import MemberShip from "../Components/MemberShip";
import RoadMap from "../Components/RoadMap";
import FAQ from "../Components/FAQ";
import Team from "../Components/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MemberShip />
      <RoadMap />
      <Team />
      <FAQ />
    </div>
  );
};

export default Home;
