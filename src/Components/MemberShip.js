import React from "react";
import styles from "../style";
import divider from "../assets/Divider.png";

import Tier2 from "./childComponent/Tier2";
import Tier3 from "./childComponent/Tier3";
import Tier1 from "./childComponent/Tier1";
const MemberShip = () => {
  const benifits = [
    "Passive income through ETH dividends",
    "Membership access to The Lair",
    "Membership access within The Superhero Academy platform",
    "Release advantages, community advantages",
    "Access to the community real estate portfolio",
    "Annual access into V-Fest and other Vindico Studios events",
  ];
  return (
    <div className=" md:mt-[80px] mt-[40px]">
      <div
        id="membership"
        className={`${styles.paddingX} md:pb-16 pb-8 membership max-w-[1440px] mx-auto md:px-[10rem]  flex flex-col gap-4`}
      >
        <div className="uppercase font-Revamped flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-[18px] md:text-[28px] md:leading-8 leading-6">
              TKTV MEMBERSHIP
            </h3>
            <h1 className="text-gradient md:text-[67px] text-[47px] stroke-1 md:leading-[57px] leading-10 ">
              Tiers
            </h1>
          </div>
        </div>
        <p className="text-lightWhite font-IbmMono font-medium md:text-[14px] text-[12px] leading-6 text-center">
          All holders will automatically unlock an elite membership, unlocking a
          range of benefits, such as inclusion in regular dividend payouts,
          ability to reserve community owned properties, and privileges over
          nonmembers during each Vindico release or event. However, certain
          ownership conditions will categorize members into higher tiers,
          granting them even greater benefits.
        </p>
        <div className="flex flex-col gap-10">
          <Tier1 benifits={benifits} />
          <Tier2 />
          <Tier3 />
        </div>
      </div>
      <div className="relative">
        <img
          className=" relative w-full h-[40px]  z-[1]"
          src={divider}
          alt=""
        />
        <div className="divider-overlay"></div>
      </div>
    </div>
  );
};

export default MemberShip;
