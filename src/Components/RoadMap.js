import React from "react";
import styles from "../style";
import shape from "../assets/Shape.png";
import pointer from "../assets/Pointer.svg";
import secPointer from "../assets/secPointer.svg";
import divider from "../assets/Divider.png";
import {
  firstInfo,
  secInfo,
  thirdInfo,
  fourthInfo,
  fifthInfo,
  sixthInfo,
  seventhInfo,
} from "../Components/information";
import RoadMapUtils from "./RoadMapUtils";
const RoadMap = () => {
  return (
    <div>
      <div
        id="roadmap"
        className={`md:${styles.padding} mt-7 max-w-[1440px] mx-auto lg:px-[10rem]  flex flex-col gap-4`}
      >
        <div className="uppercase font-Revamped flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-[18px] md:text-[28px] md:leading-8 leading-6">
              Built For Community By
            </h3>
            <h1 className="text-gradient md:text-[67px] text-[47px] stroke-1 md:leading-[57px] leading-10 ">
              Communty
            </h1>
          </div>
        </div>

        <div className=" text-white mt-[100px] ">
          <div className=" w-full h-full">
            <div className="relative wrap   h-full">
              <div className=" border-yellow-555  absolute left-[50%]    ">
                <img
                  className="md:w-[15px] w-[10px] sm:h-full h-[1900px]"
                  src={shape}
                  alt=""
                />
              </div>
              <div className="lg:mt-[8rem] ml-5 relative flex justify-between flex-row items-center w-full right-timeline">
                <div className="absolute top-0 xl:left-[47%] lg:left-[46%] md:left-[45%] sm:left-[46%] left-[43%]">
                  <img className="md:w-[76px] w-10" src={pointer} alt="" />
                </div>
                <div className="order-1 w-5/12"></div>
                <div className="order-1 right-pointer w-5/12 lg:ml-10 text-left">
                  <RoadMapUtils info={firstInfo} />
                </div>
              </div>
              <div className=" relative flex flex-row-reverse justify-between items-center w-full right-timeline">
                <div className="absolute top-0 xl:left-[46%] lg:left-[45%] md:left-[44%] sm:left-[47%] left-[44%]">
                  <img className="md:w-full w-10" src={secPointer} alt="" />
                </div>
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 md:py-4 text-left">
                  <RoadMapUtils info={secInfo} />
                </div>
              </div>
              <div className=" ml-5 relative flex justify-between flex-row items-center w-full right-timeline">
                <div className="absolute top-0 xl:left-[47%] lg:left-[46%] md:left-[45%] sm:left-[46%] left-[43%]">
                  <img className="md:w-[76px] w-10" src={pointer} alt="" />
                </div>
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 lg:ml-10 text-left">
                  <RoadMapUtils info={thirdInfo} />
                </div>
              </div>

              <div className=" relative flex flex-row-reverse justify-between items-center w-full right-timeline">
                <div className="absolute top-0 xl:left-[46%] lg:left-[45%] md:left-[44%] sm:left-[47%] left-[44%]">
                  <img className="md:w-full w-10" src={secPointer} alt="" />
                </div>
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <RoadMapUtils info={fourthInfo} />
                </div>
              </div>
              <div className=" ml-5 relative flex justify-between flex-row items-center w-full right-timeline">
                <div className="absolute top-0 xl:left-[47%] lg:left-[46%] md:left-[45%] sm:left-[46%] left-[43%]">
                  <img className="md:w-[76px] w-10" src={pointer} alt="" />
                </div>
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 lg:ml-10 text-left">
                  <RoadMapUtils info={fifthInfo} />
                </div>
              </div>
              <div className=" relative flex flex-row-reverse justify-between items-center w-full right-timeline">
                <div className="absolute top-0 xl:left-[46%] lg:left-[45%] md:left-[44%] sm:left-[47%] left-[44%]">
                  <img className="md:w-full w-10" src={secPointer} alt="" />
                </div>
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <RoadMapUtils info={sixthInfo} />
                </div>
              </div>
              <div className=" ml-5 relative flex justify-between flex-row items-center w-full right-timeline">
                <div className="absolute top-0 xl:left-[47%] lg:left-[46%] md:left-[45%] sm:left-[46%] left-[43%]">
                  <img className="md:w-[76px] w-10" src={pointer} alt="" />
                </div>
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 lg:ml-10 text-left">
                  <RoadMapUtils info={seventhInfo} />
                </div>
              </div>
            </div>
          </div>
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

export default RoadMap;
