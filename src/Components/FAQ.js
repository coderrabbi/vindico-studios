import React from "react";
import Faq from "react-faq-component";
import footerRobot from "../assets/footer-robot.png";
import q from "../assets/q.svg";
import q2 from "../assets/q2.svg";
import q3 from "../assets/q3.svg";

const FAQ = () => {
  const data = {
    rows: [
      {
        title: "What is the purpose of The Key To V collection?",
        content: `To reward our earliest supporters and community members with a lifetime membership and innovative benefits as we gear up for a hell of a year.`,
      },
      {
        title: "What are the project's core values?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Supply, mint price, and mint date?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "How can I help the community grow?",
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };

  const styles = {
    bgColor: "white",
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: "gray",
    arrowColor: "black",
  };

  const config = {
    animate: true,
    arrowIcon: "'",
    tabFocus: true,
  };

  return (
    <div className="md:mt-[80px] mt-[40px]">
      <div
        id="faq"
        className={`${styles.paddingX} faq  max-w-[1440px] mx-auto lg:px-[10rem]  flex flex-col gap-4`}
      >
        <div className="uppercase font-Revamped flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-[18px] md:text-[28px] md:leading-8 leading-6">
              Frequently Asked
            </h3>
            <h1 className="text-gradient md:text-[67px] text-[47px] stroke-1 md:leading-[57px] leading-10 ">
              Questions
            </h1>
          </div>
        </div>

        <div className="flex md:flex-row items-center gap-6 flex-col">
          <div className="w-[30%] md:block mx-auto">
            <div className="flex flex-col justify-center items-center">
              <div className="flex md:-bottom-[45px] -bottom-[35px] md:left-[14px] left-[10px] relative">
                {" "}
                <img src={q3} alt="" />
                <img src={q2} className="-mt-8" alt="" />
                <img src={q} alt="" />
              </div>
              <img src={footerRobot} alt="" className="w-[70%] " />
            </div>
          </div>
          <div className="md:w-[70%] md:px-0 px-5  w-[100%] mx-auto">
            <Faq
              className="border-2 text-red-500"
              data={data}
              styles={styles}
              config={config}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
