import React from "react";
import helmet from "../../assets/helmet.png";
const Tier3 = () => {
  const benifits = [
    "Addition passive income through percentage ownership in the community real estate portfolio",
    "Access to The Lab, an exclusive floor within The Lair",
    "V.V.I.P privileges in future mints and releases",
    "Release advantages, community advantages",
    "V.V.I.P treatment at all events, premiers, etc. (luxury transportation, private sectioning, fine dining, etc.)",
  ];
  return (
    <div className="md:flex md:flex-row flex flex-col-reverse  justify-between items-center">
      <div className="flex-1">
        <h1 className="text-gradient py-[42px] uppercase font-Revamped md:text-[28px] text-[18px] stroke-1 leading-[32.21px]">
          Tier 3 - V.V.I.P.s
        </h1>
        <div className="font-IbmMono font-medium  text-white">
          <div className="md:text-[14px] text-[12px] flex flex-col gap-6">
            <h3>Eligibility:</h3>
            <li className="text-[#968e8e]">
              Hold at least one of the 10 extremely rare TKTV NFTs
            </li>
          </div>
        </div>
        <div className="font-IbmMono font-medium  text-white">
          <div className="md:text-[14px] text-[12px] flex flex-col  ">
            <h3 className="md:py-6 py-4">Benefits:</h3>
            {benifits.map((item, index) => (
              <li
                key={index}
                className="text-[#968e8e] md:leading-10 leading-6 font-medium"
              >
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img className="w-[397px]" src={helmet} alt="helmet" />
      </div>
    </div>
  );
};

export default Tier3;
