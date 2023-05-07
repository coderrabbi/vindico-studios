import React, { useState } from "react";
import styles from "../style";
import logo from "../assets/Logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { text: "HOME", link: "/" },
    { text: "About", link: "About" },
    { text: "Membership", link: "membership" },
    { text: "Roadmap", link: "roadmap" },
    { text: "faqs", link: "faq" },
  ];
  const [toggle, settoggle] = useState(false);
  const activeClass = (state) => (state.isActive ? `active` : "");

  return (
    <div className="sticky top-0 z-20">
      <div className="md:flex hidden justify-center">
        <ul
          className={`flex h-[120px] text-white items-center text-[12px] gap-6 font-Revamped uppercase ${styles.paddingY}`}
        >
          {navItems.map((item, index) => {
            return (
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                key={index}
                className="cursor-pointer"
                activeClass="active"
              >
                {item.text}
              </Link>
            );
          })}
          <div className="px-10 cursor-pointer">
            <img src={logo} alt="Vindico Studios" />
          </div>
          <div>
            <ul className="flex gap-6 items-center ">
              {" "}
              <li className="cursor-pointer">
                <Link
                  to="Marketplace"
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  className={activeClass}
                >
                  Marketplace
                </Link>
              </li>
              <li className="cursor-pointer badge ">
                <Link to="/game" className={activeClass}>
                  Game
                </Link>{" "}
              </li>
              <li className="cursor-pointer gradient border-2 border-[#FFF0F080] py-3 px-6 rounded-full">
                <Link to="wallet"> Connect Wallet</Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div
        className={`${styles.padding} flex items-center justify-between md:hidden bg-[#1e0e0f]`}
      >
        <Link to="/">
          <img src={logo} className="w-[40px]" alt="" />
        </Link>
        <div
          onClick={() => {
            settoggle((prev) => !prev);
          }}
        >
          {toggle ? (
            <RiCloseLine className="cursor-pointer text-white text-[40px]" />
          ) : (
            <RiMenu3Line className="cursor-pointer text-white text-[40px]" />
          )}
        </div>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-5 bg-[#1e0e0f] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[10]`}
        >
          <ul className="flex flex-1 justify-center items-center flex-col">
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={` cursor-pointer  text-white items-center text-[12px] gap-6 font-Revamped uppercase  ${
                    index === navItems.length - 1 ? `mr-0` : `mb-4`
                  }`}
                >
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    activeClass="active"
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
            <div className="flex flex-col gap-6 items-center mt-4">
              <li className="cursor-pointer  text-white items-center text-[12px] gap-6 font-Revamped uppercase">
                <Link
                  to="Marketplace"
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  className={activeClass}
                >
                  Marketplace
                </Link>
              </li>
              <li className="cursor-pointer  text-white items-center text-[12px] gap-6 font-Revamped uppercase badge ">
                <Link to="/game" className={activeClass}>
                  Game
                </Link>{" "}
              </li>
              <li className="cursor-pointer   items-center text-[12px] gap-6 font-Revamped uppercase gradient text-white border-2 border-[#FFF0F080] py-3 px-6 rounded-full">
                <Link to="wallet"> Connect Wallet</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
