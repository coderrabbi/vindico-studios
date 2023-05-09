import React from "react";
import { useState } from "react";
import PurchaseModal from "./PurchaseModal";

const MarketPlaceCard = ({ info }) => {
  const [modal, setModal] = useState(false);
  const openMOdal = () => {
    setModal(true);
  };
  const handleBuy = () => {
    setModal(false);
  };
  const cancle = () => {
    setModal(false);
  };
  return (
    <div className="grid  gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center text-center">
      {modal && (
        <div className="fixed  top-0 right-0 left-0 bottom-0  bg-[#0000009a]  z-[10]" />
      )}
      {info.map((item, index) => (
        <div
          key={index}
          className="uppercase flex mb-6 flex-col justify-center items-center gap-4 border-2 border-lightWhite w-[297px] h-[294px] mx-auto rounded-2xl"
        >
          <div className="max-w-[115px]">
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
          <button
            onClick={openMOdal}
            className="cursor-pointer gradient border-2 border-[#FFF0F080] w-[146px] h-[35px] rounded-full uppercase font-Revamped text-white"
          >
            Purchase
          </button>

          {modal && <PurchaseModal cancle={cancle} handleBuy={handleBuy} />}
        </div>
      ))}
    </div>
  );
};

export default MarketPlaceCard;
