import React from "react";

const RoadMapUtils = ({ info }) => {
  return (
    <div className="flex flex-col md:gap-4 items-center  ">
      <h4 className=" text-gradient md:pt-0 pt-4 md:text-start text-center  uppercase font-Revamped text-[12px] md:text-[22px]  md:leading-[25.31px]">
        {info.heading}
      </h4>
      {info.discription?.map((item, index) => (
        <li
          key={index}
          className="text-lightWhite text-center list-none font-IbmMono font-medium md:text-[14px] text-[10px] lg:leading-6 leading-2 md:text-start"
        >
          {item}
        </li>
      ))}
    </div>
  );
};

export default RoadMapUtils;
