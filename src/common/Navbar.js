import React from "react";
import styles from "../style";
import logo from "../assets/Logo.svg";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";
const Navbar = () => {
  const navItems = [
    { text: "HOME", link: "/" },
    { text: "About", link: "About" },
    { text: "Membership", link: "membership" },
    { text: "Roadmap", link: "/roadmap" },
    { text: "faqs", link: "/faq" },
  ];

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
                <Link to="Marketplace" className={activeClass}>
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
        <RiMenu3Line className="cursor-pointer text-white text-[40px]" />
      </div>
    </div>
  );
};

export default Navbar;
