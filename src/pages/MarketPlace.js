import React from "react";
import styles from "../style";
import eth from "../assets/eth.svg";
import right from "../assets/right-sign.svg";
import bottle from "../assets/bottle.svg";
import cape from "../assets/cape.png";
import mask from "../assets/mask.svg";
import robots from "../assets/action.png";
import ticket from "../assets/mint.png";
import MarketPlaceCard from "../Components/MarketPlaceCard";
const MarketPlace = () => {
  const marketplaceCard = [
    {
      img: eth,
      price: "15,000  ",
      title: "0.05 ETH ",
    },
    {
      img: eth,
      price: "50,000 ",
      title: "0.25 ETH ",
    },
    {
      img: right,
      price: "3,333",
      title: "Whitelist Spot",
    },
    {
      img: bottle,
      price: "10,000 ",
      title: "Super Serum NFT (1/99)",
    },
    {
      img: cape,
      price: "15,000",
      title: "Vindico Studios Cape (1/77)",
    },
    {
      img: robots,
      price: "25,000 ",
      title: "Action Figure (1/15)",
    },
    {
      img: mask,
      price: "50,000 ",
      title: "Display Helmet (1/1)",
    },
    {
      img: ticket,
      price: "7,777",
      title: "Mint Pass (1/1500)",
    },
  ];

  return (
    <div
      id="Marketplace"
      className={`md:${styles.padding} relative mt-7 max-w-[1440px] mx-auto lg:px-[10rem]`}
    >
      <div className="flex md:flex-row  gap-3 flex-col justify-between items-center">
        <div className="flex-1">
          <h1 className="font-Revamped font-medium text-white md:text-[28px] text-[18px]">
            MARKETPLACE
          </h1>
          <p className="font-IbmMono text-lightWhite text-[14px] leading-6 font-medium">
            Welcome to the $VCHIP marketplace! Spend your stack wisely, this is
            just the beginning…
          </p>
        </div>
        <div className="flex flex-1 md:flex-row justify-end  flex-col mt-5 md:mt-0 gap-4">
          <div className="border border-lightWhite rounded-2xl px-8 py-10 ">
            <h3 className="font-Revamped text-white  md:text-[22px] text-[15px] leading-[25.31px]">
              10,000,000
            </h3>
            <span className="text-lightWhite font-IbmMono font-medium text-[12px]">
              $VCHIP Max Supply
            </span>
          </div>
        </div>
      </div>
      <div className="my-10 ">
        <MarketPlaceCard info={marketplaceCard} />
      </div>
    </div>
  );
};

export default MarketPlace;
