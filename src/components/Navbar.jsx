import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../variables";
import { logo, menu, close, logoColor } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img
            src={logoColor}
            className="w-20 h-20 rounded-full object-cover"
            alt="logo"
          />
          <p className="text-white flex text-[18px] font-bold cursor-pointer">
            Gela
            <span className="sm:block hidden">&nbsp;| Pipia</span>
          </p>
        </Link>
        <ul className="list-none sm:flex flex-row gap-10 max-sm:hidden">
          {navLinks.map((navLink) => (
            <li
              onClick={() => setActive(navLink.title)}
              key={navLink.title}
              className={`${
                active === navLink.title ? "text-white" : "text-secondary"
              }
              hover:text-white text-[18px] font-medium cursor-pointer`}>
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg`}>
            <ul className="list-none flex flex-col justify-end gap-5 ">
              {navLinks.map((navLink) => (
                <li
                  onClick={() => {
                    setToggle(false)
                    setActive(navLink.title)
                  }}
                  key={navLink.title}
                  className={`${
                    active === navLink.title ? "text-white" : "text-secondary"
                  }
                  hover:text-white font-poppins font-medium text-[16px] cursor-pointer`}>
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}
          </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};
export default Navbar;
