import React from "react";
import styles from "../style";
import whiteRobot from "../assets/white-robot-full.png";
import blackRobot from "../assets/black-robot-full.png";
import divider from "../assets/Divider.png";
const About = () => {
  return (
    <div id="About" className="about">
      <div className={`relative  md:mt-[120px] mt-[80px]`}>
        <div
          className={`${styles.paddingX} light-bg max-w-[1440px] mx-auto md:h-[883px] relative z-2  flex  justify-center`}
        >
          <img
            className="absolute bottom-0 left-14 lg:block hidden "
            src={whiteRobot}
            alt=""
          />
          <div className=" justify-center">
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
            <div className={`lg:px-[350px] md:px-[150px] md:py-10 py-8`}>
              <p className="text-center relative z-10 font-IbmMono font-medium md:text-[14px] text-[10px]  leading-6 text-lightWhite">
                We are thrilled to have you join the Vindico Studios community
                on our exciting journey as an emerging entertainment powerhouse.
                Our team is dedicated to developing innovative software
                platforms and captivating entertainment productions that will
                leave fans on the edge of their seats. Our primary goal during
                this initial phase is to surpass industry expectations and
                establish ourselves as new creators with a passion for
                delivering exceptional quality to our audience. <br />
                It all starts with{" "}
                <span className="text-orange-500">The Key To V</span> NFT{" "}
                collection, your golden ticket to VIP status within the Vindico
                Studios ecosystem! The Key To V collection grants holders a{" "}
                <span className="text-white">lifetime membership</span> with
                Vindico Studios and a multitude of continuously evolving
                benefits and privileges. The artwork features characters from
                our ever-growing portfolio, which will be seen again throughout
                future releases. <br />
                We have a range of exciting platforms in the works, including
                <span className="text-white">
                  {" "}
                  The Superhero Academy for Self-Growth, The Vindico Emporium
                </span>
                , and <span className="text-white">The Lair Metaverse</span>.
                Plus, we're rolling out our debut productions, such as short
                films, comic series, specials, and mini-series, to introduce you
                to our engaging characters and thrilling storylines.
                <br />
                And let's not forget about{" "}
                <span className="text-white">
                  The Community Real-Estate Portfolio
                </span>
                , where our holders/members can explore community-owned
                properties across the globe. It's all part of our commitment to
                building a remarkable future for our community. <br />
                Join our community and get ready for some serious fun!
              </p>
            </div>
            <img
              className="absolute z-0 bottom-0 lg:block hidden right-12 "
              src={blackRobot}
              alt=""
            />
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

export default About;
