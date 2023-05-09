import React, { useState } from "react";
import styles from "../style";
import logo from "../assets/Logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const navItems = [
    { text: "About", link: ".about", to: "About" },
    { text: "Membership", link: ".membership", to: "membership" },
    { text: "Roadmap", link: ".roadmap", to: "roadmap" },
    { text: "faqs", link: ".faq", to: "faq" },
  ];
  const [toggle, settoggle] = useState(false);

  const location = useLocation();
  const [pathname, setPathname] = useState(null);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [location]);
  return (
    <div className="md:relative sticky top-0 z-20">
      <div className="md:flex hidden justify-center">
        <ul
          className={`flex h-[120px] text-white items-center text-[12px] gap-8 font-Revamped uppercase ${styles.paddingY}`}
        >
          <Link
            className={`${pathname === "/" ? "active" : ""}`}
            onClick={() => {
              setTimeout(() => {
                const location = document.querySelector(".home").offsetTop;

                window.scrollTo({
                  left: 0,
                  top: location - 100,
                });
              }, 300);
            }}
          >
            Home
          </Link>
          {navItems.map((item, index) => {
            return (
              <Link
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    const location = document.querySelector(
                      item.link
                    ).offsetTop;

                    window.scrollTo({
                      left: 0,
                      top: location - 100,
                    });
                  }, 300);
                }}
                key={index}
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
                <NavLink to="/marketplace">Marketplace</NavLink>
              </li>
              <li className="cursor-pointer badge ">
                <Link to="/game">Game</Link>{" "}
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
          <img src={logo} className="w-[45px]" alt="" />
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
          <ul className=" flex-1 ">
            <li
              className={` text-center mb-4 cursor-pointer  text-white  text-[12px]  font-Revamped uppercase `}
            >
              <Link
                className={`${pathname === "/" ? "active" : ""}`}
                onClick={() => {
                  setTimeout(() => {
                    const location = document.querySelector(".home").offsetTop;

                    window.scrollTo({
                      left: 0,
                      top: location - 100,
                    });
                  }, 300);
                }}
              >
                Home
              </Link>
            </li>

            {navItems.map((item, index) => {
              return (
                <li
                  className={` flex justify-center items-center flex-col cursor-pointer  text-white  text-[12px]  font-Revamped uppercase `}
                >
                  <Link
                    className={`${
                      index === navItems.length - 1 ? `mr-0` : `mb-4`
                    }`}
                    key={index}
                    to="/"
                    onClick={() => {
                      setTimeout(() => {
                        const location = document.querySelector(
                          item.link
                        ).offsetTop;

                        window.scrollTo({
                          left: 0,
                          top: location - 100,
                        });

                        settoggle((prev) => !prev);
                      }, 300);
                    }}
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
                >
                  Marketplace
                </Link>
              </li>
              <li className="cursor-pointer  text-white items-center text-[12px] gap-6 font-Revamped uppercase badge ">
                <Link to="/game">Game</Link>{" "}
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
