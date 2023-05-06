import React from "react";

const RoadMapUtils = ({ info }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-gradient  uppercase font-Revamped text-[12px] md:text-[22px]  md:leading-[25.31px]">
        {info.heading}
      </h4>
      {info.discription?.map((item, index) => (
        <li
          key={index}
          className="text-lightWhite list-none font-IbmMono font-medium md:text-[14px] text-[10px] lg:leading-6 leading-2 text-start"
        >
          {item}
        </li>
      ))}
    </div>
  );
};

export default RoadMapUtils;
