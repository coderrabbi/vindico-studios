import React from "react";
import styles from "../style";
import logo from "../assets/Logo.png";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    { text: "HOME", link: "/" },
    { text: "About", link: "/about" },
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
              <NavLink to={item.link} key={index} className={activeClass}>
                {item.text}
              </NavLink>
            );
          })}
          <div className="px-10 cursor-pointer">
            <img src={logo} alt="Vindico Studios" />
          </div>
          <div>
            <ul className="flex gap-6 items-center ">
              {" "}
              <li className="cursor-pointer">
                <NavLink className={activeClass}>Marketplace</NavLink>
              </li>
              <li className="cursor-pointer ">
                <NavLink to="/game" className={activeClass}>
                  Game
                </NavLink>{" "}
              </li>
              <li className="cursor-pointer gradient py-3 px-6 rounded-full">
                Connect Wallet
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;