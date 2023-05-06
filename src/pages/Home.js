import React from "react";
import Hero from "../Components/Hero";
import About from "./About";
import MemberShip from "../Components/MemberShip";
import RoadMap from "../Components/RoadMap";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MemberShip />
      <RoadMap />
    </div>
  );
};

export default Home;
