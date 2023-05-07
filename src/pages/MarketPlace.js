import React from "react";
import styles from "../style";
import eth from "../assets/eth.svg";
import right from "../assets/right-sign.svg";
import bottle from "../assets/bottle.svg";
import coin from "../assets/coin.svg";
import mask from "../assets/mask.svg";
import robots from "../assets/robots.svg";
import ticket from "../assets/ticket.svg";
import MarketPlaceCard from "../Components/MarketPlaceCard";
const MarketPlace = () => {
  const marketplaceCard = [
    {
      img: eth,
      price: "5,000",
      title: "0.1 ETH",
    },
    {
      img: eth,
      price: "20,000",
      title: "0.5 ETH",
    },
    {
      img: right,
      price: "2,000",
      title: "Whitelist Spot",
    },
    {
      img: bottle,
      price: "5,500",
      title: "Super Serum NFT",
    },
    {
      img: coin,
      price: "5,000",
      title: "cape",
    },
    {
      img: robots,
      price: "12,000",
      title: "Action Figure",
    },
    {
      img: mask,
      price: "25,000",
      title: "Cosplay Helmet",
    },
    {
      img: ticket,
      price: "7,777",
      title: "Mint Pass",
    },
  ];

  return (
    <div
      id="Marketplace"
      className={`md:${styles.padding} mt-7 max-w-[1440px] mx-auto lg:px-[10rem]`}
    >
      <div className="flex md:flex-row gap-3 flex-col justify-between items-center">
        <div className="flex-1">
          <h1 className="font-Revamped font-medium text-white md:text-[28px] text-[18px]">
            MARKETPLACE
          </h1>
          <p className="font-IbmMono text-lightWhite text-[14px] leading-6 font-medium">
            You can purchase ETH, claim Whitelist Spots, mint NFTs, get Mint
            Pass using our own token $VCHIP built for the community by
            community.
          </p>
        </div>
        <div className="flex flex-1 md:flex-row flex-col mt-5 md:mt-0 gap-4">
          <div className="border border-lightWhite rounded-2xl px-8 py-10 ">
            <h3 className="font-Revamped text-white  md:text-[22px] text-[15px] leading-[25.31px]">
              10,255,89.53
            </h3>
            <span className="text-lightWhite font-IbmMono font-medium text-[12px]">
              $VCHIP Max Supply
            </span>
          </div>
          <div className="border border-lightWhite rounded-2xl px-10 py-10 ">
            <h3 className="font-Revamped text-white md:text-[22px] text-[15px] leading-[25.31px]">
              3.79 ETH
            </h3>
            <span className="text-lightWhite font-IbmMono font-medium text-[12px]">
              Purchased using $VCHIP
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
