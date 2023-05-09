import React from "react";
import styles from "../style";
import founder from "../assets/founder.png";
// import cofounder from "../assets/cofounder.png";
import leadArtist from "../assets/leadArtist.png";
import drBrain from "../assets/dr.brain.png";
import headofOparation from "../assets/headOfOparetion.png";
import relation from "../assets/relation-coordinator.png";
const Team = () => {
  const teamMemberInfo = [
    {
      img: founder,
      name: "Jack",
      subTitle: "Founder and  Creative Director",
      description:
        "Passionate scriptwriter and creator. Real estate investor and expert. Web3 obsessed!",
    },
    {
      img: drBrain,
      name: "Dr.Brain",
      subTitle: "Co-Founder ",
      description:
        "Serial entrepreneur and early investor in some of the biggest tech companies. Early blockchain enthusiast, dedicated to a new career of building in web3",
    },
    {
      img: headofOparation,
      name: "CaptainShmaptain",
      subTitle: "Head of Operations ",
      description:
        "Former VP of a startup tech company, natural born leader with vital connections, resources, and skills.",
    },
    {
      img: leadArtist,
      name: "BigMike",
      subTitle: "Lead Artist  ",
      description:
        "Highly skilled and versatile artist specializing in multiple styles of artwork and animation. Crafted masterpieces for numerous web2 and web3 brands before leading our project’s art process",
    },
    {
      img: relation,
      name: "TooDeep",
      subTitle: "Relations Coordinator  ",
      description:
        "Head of branding relations/collaborations and Discord community manager. Years of web3 experience and creating connections working for successful projects such as Prime Ape Planet, Surgence, and The NFT Circle.",
    },
  ];
  return (
    <div
      className={`${styles.paddingX} md:mt-[120px] mt-[80px max-w-[1440px] mx-auto relative z-2   justify-center`}
    >
      <div className="flex flex-col items-center gap-3 font-Revamped">
        <h3 className="text-white text-[18px] md:text-[28px] md:leading-8 leading-6">
          core
        </h3>
        <h1 className="text-gradient md:text-[67px] text-[47px] stroke-1 md:leading-[57px] leading-10 ">
          Team
        </h1>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center md:gap-10 gap-6   ">
          {teamMemberInfo?.map((item, index) => (
            <div key={index} className="flex md:mt-10 mt-5 flex-col gap-4 ">
              <div>
                <img
                  src={item.img}
                  className="w-[235px] mx-auto h-[235px] rounded-full border-4 border-[#f10000]"
                  alt={item.img}
                />
              </div>
              <div className="text-center  flex flex-col gap-4 items-center">
                <div className="flex flex-col gap-2">
                  <h3 className="text-gradient font-Revamped md:text-[26px] text-[15px] stroke-1 md:leading-[26px] leading-[15px] ">
                    {item.name}
                  </h3>
                  <h4 className="text-white text-[12px] font-Revamped md:text-[17px] md:leading-4 leading-2">
                    {item.subTitle}
                  </h4>
                </div>
                <p className="font-IbmMono md:text-[15px] text-[12px] text-lightWhite uppercase">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
