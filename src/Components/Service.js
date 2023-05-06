import React from "react";
import gun from "../assets/gun.png";
const Service = ({ benifits }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <h1 className="text-gradient py-[42px] uppercase font-Revamped md:text-[28px] text-[18px] stroke-1 leading-[32.21px]">
          Tier 1 - Vigilantes
        </h1>
        <div className="font-mono  text-white">
          <div className="text-[14px] flex flex-col gap-6">
            <h3>Eligibility:</h3>
            <li className="text-[#968e8e]">Hold at least one TKTV NFT</li>
          </div>
        </div>
        <div className="font-mono  text-white">
          <div className="text-[14px] flex flex-col ">
            <h3 className="py-6">Benefits:</h3>
            {benifits.map((item, index) => (
              <li key={index} className="text-[#968e8e] leading-10 font-medium">
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img className="w-[397px]" src={gun} alt="gun" />
      </div>
    </div>
  );
};

export default Service;
