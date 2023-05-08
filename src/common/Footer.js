import React from "react";
import logo from "../assets/Logo.svg";
const Footer = () => {
  return (
    <div className=" flex py-4 gap-3 flex-col items-center justify-center text-center">
      <img className="md:w-[50px] w-[50px] " src={logo} alt="" />
      <span className="font-IbmMono font-medium text-[12px] leading-[13.6px] text-lightWhite">
        © Copyright 2023 - All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
