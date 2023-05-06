import React, { useEffect, useState } from "react";
import styles from "../style";
import blackRobot from "../assets/black-robot-half.png";
import whiteRobot from "../assets/white-robot-half.png";
import divider from "../assets/Divider.png";
import { BsDiscord, BsTwitter } from "react-icons/bs";
const Hero = () => {
  let [clockData, setClockData] = useState({
    dd: 0,
    hh: 0,
    mm: 0,
    ss: 0,
  });

  useEffect(() => {
    const sec = 1000,
      min = sec * 60,
      hour = min * 60,
      day = hour * 24;

    let clockInterval = setInterval(() => {
      const end = new Date("May 19, 2023 12:00:00").getTime();
      const current = new Date().getTime();
      const remaining = end - current;

      let dd = Math.floor(remaining / day);
      let hh = Math.floor((remaining % day) / hour);
      let mm = Math.floor((remaining % hour) / min);
      let ss = Math.floor((remaining % min) / sec);

      setClockData((previous) => {
        return { ...previous, dd, hh, mm, ss };
      });
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div
      className={`relative bg-[url(https://i.ibb.co/WGkWFjT/Background-Image.png)]  md:mt-[-130px] bg-opacity-30  md:h-[697px] h-[550px]`}
    >
      <div className="img-overlay"></div>
      <div className="dark-overlay"></div>
      <img
        className="absolute bottom-9 left-14 md:block hidden "
        src={whiteRobot}
        alt=""
      />
      <div
        className={`${styles.paddingX} relative z-2  flex h-full items-center justify-center`}
      >
        <div className="flex items-end justify-center">
          <div className="uppercase font-Revamped flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-[18px] md:text-[28px] leading-8">
                wellcome to
              </h3>
              <h1 className="text-gradient md:text-[67px] text-[47px] stroke-1 leading-[57px] ">
                vindico <br /> studios
              </h1>
            </div>
            <div className="font-mono text-[#FFF0F080]  flex gap-4 justify-center">
              <div className="flex-col gap-3 flex">
                <span className="flex items-center justify-center rounded-full border w-[50px] h-[50px] mx-auto my-auto text-[22px] ">
                  {clockData.dd}
                </span>
                <span className="text-[10px]">Days</span>
              </div>

              <div className="flex-col gap-3 flex">
                <span className=" flex items-center justify-center rounded-full border w-[50px] h-[50px] mx-auto my-auto text-[22px] ">
                  {clockData.hh}
                </span>
                <span className="text-[10px] ">Hours</span>
              </div>
              <div className="flex-col gap-3 flex">
                <span className="flex items-center justify-center rounded-full border w-[50px] h-[50px] mx-auto my-auto text-[22px] ">
                  {clockData.mm}
                </span>
                <span className="text-[10px]">Minutes</span>
              </div>

              <div className="flex-col gap-3 flex">
                <span className="flex items-center justify-center rounded-full border w-[50px] h-[50px] mx-auto my-auto text-[22px] ">
                  {clockData.ss}
                </span>
                <span className="text-[10px]">Seconds</span>
              </div>
            </div>
            <div className="flex md:flex md:flex-row flex-col gap-4 justify-center text-[12px]">
              <button className="gradient text-white w-[175px] h-[40px] border rounded-full">
                Explore Now
              </button>
              <button className="black-gradient border text-white w-[175px] h-[40px] rounded-full">
                Join Community
              </button>
            </div>
            <div className=" flex gap-3 ">
              <BsDiscord className=" cursor-pointer text-white hover:text-[#afafaf]" />
              <BsTwitter className=" cursor-pointer text-white hover:text-[#afafaf]" />
            </div>
          </div>
          <img
            className="absolute bottom-9 md:block hidden right-12 "
            src={blackRobot}
            alt=""
          />
        </div>
      </div>
      <img className="absolute bottom-0 z-[-1]" src={divider} alt="" />
    </div>
  );
};

export default Hero;