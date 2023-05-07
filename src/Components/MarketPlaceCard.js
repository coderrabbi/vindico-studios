import React from "react";
import { Link } from "react-scroll";

const MarketPlaceCard = ({ info }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center text-center">
      {info.map((item, index) => (
        <div
          key={index}
          className="uppercase flex flex-col justify-center items-center gap-4 border-2 border-lightWhite w-[297px] h-[294px] mx-auto rounded-2xl"
        >
          <div>
            <img src={item.img} alt="" />
          </div>
          <div className="flex flex-col items-center gap-1 justify-center">
            {" "}
            <h1 className="font-Revamped text-white text-[20px] leading-[23px]">
              {item.title}
            </h1>
            <span className="text-lightWhite font-IbmMono font-medium">
              Price: {item.price} $VCHIP
            </span>
          </div>
          <button className="cursor-pointer gradient border-2 border-[#FFF0F080] w-[146px] h-[35px] rounded-full uppercase font-Revamped text-white">
            {" "}
            <Link to="wallet"> Purchase</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MarketPlaceCard;
