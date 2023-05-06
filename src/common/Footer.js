import React from "react";
import logo from "../assets/Logo.svg";
const Footer = () => {
  return (
    <div className=" flex py-4 gap-3 flex-col items-center justify-center text-center">
      <img className="md:w-[75px] w-[50px] " src={logo} alt="" />
      <span className="font-IbmMono font-medium text-lightWhite">
        © Copyright 2023 - All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
