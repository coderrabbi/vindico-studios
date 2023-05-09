import React from "react";
import coat from "../../assets/coat.png";
const Tier2 = () => {
  const benifits = [
    "Ability to grant guests membership access in The Lair",
    "Ability to reserve community real estate properties free",
    "Advanced privileges in future mints, releases, etc.",
    "Access to private community events",
    "Access to the community real estate portfolio",
    "VIP access to IRL premieres",
  ];
  return (
    <div>
      <div className="md:flex md:flex-row flex flex-col justify-between items-center">
        <div className="flex-1 flex justify-start">
          <img className="w-[397px]" src={coat} alt="temper" />
        </div>
        <div className="flex-1">
          <h1 className="text-gradient py-[42px] uppercase font-Revamped md:text-[28px] text-[18px] stroke-1 leading-[32.21px]">
            Tier 2 - Vindicates
          </h1>
          <div className="font-IbmMono font-medium  text-white">
            <div className="md:text-[14px] text-[12px] flex flex-col gap-4">
              <h3>Eligibility:</h3>
              <li className="text-[#968e8e]">
                TKTV original minter (must still hold original mint)
              </li>
            </div>
          </div>
          <div className="font-IbmMono font-medium  text-white">
            <div className="md:text-[14px] text-[12px] flex flex-col ">
              <div className="mb-4">
                <h3 className="md:py-6 py-4">Benefits:</h3>
                <span className="text-[#968e8e] mb-4">
                  All tier 1 perks plus...
                </span>
              </div>
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
      </div>
    </div>
  );
};

export default Tier2;
