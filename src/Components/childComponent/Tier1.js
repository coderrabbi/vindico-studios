import React from "react";
import gun from "../../assets/gun.png";
const Tier1 = ({ benifits }) => {
  return (
    <div className="md:flex md:flex-row flex flex-col-reverse justify-between items-center">
      <div className="flex-1">
        <h1 className="text-gradient md:py-[42px] py-[25px] uppercase font-Revamped text-[18px] md:text-[28px]  md:leading-[32.21px]">
          Tier 1 - Vigilantes
        </h1>
        <div className="font-IbmMono font-medium  text-white">
          <div className="md:text-[14px] text-[12px] flex flex-col gap-6">
            <h3>Eligibility:</h3>
            <li className="text-[#968e8e]">Hold at least one TKTV NFT</li>
          </div>
        </div>
        <div className="font-IbmMono font-medium  text-white">
          <div className="md:text-[14px] text-[12px] flex flex-col ">
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
        <img className="w-[397px]" src={gun} alt="gun" />
      </div>
    </div>
  );
};

export default Tier1;
