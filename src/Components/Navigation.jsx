import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-transparent  sticky top-0 z-30  flex w-full justify-between items-center pt-2 px-5 ">
      <div>
        <span className="md:text-[32px] uppercase text-[24px]">
          <Link to="/">Vivek </Link>
        </span>
      </div>
      <div className="flex items-center font-bold md:gap-5 text-[12px]  md:text-[#3d3f44] md:text-base space-x-1 md:justify-between">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 flex items-center  uppercase underline-offset-4 decoration-[#49E1D8] md:decoration-[#1C586B] underline decoration-2 font-marcellus leading-snug  hover:opacity-75"
              : "px-3 py-2 flex items-center  uppercase underline-offset-4 hover:decoration-[#49E1D8] md:hover:decoration-[#1C586B] hover:underline hover:decoration-2 font-marcellus leading-snug  hover:opacity-75"
          }
          to={"/portfolio"}
        >
          Portfolio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 flex items-center  uppercase underline-offset-4 decoration-[#49E1D8] md:decoration-[#1C586B] underline decoration-2 font-marcellus leading-snug  hover:opacity-75"
              : "px-3 py-2 flex items-center  uppercase underline-offset-4 hover:decoration-[#49E1D8] md:hover:decoration-[#1C586B] hover:underline hover:decoration-2 font-marcellus leading-snug  hover:opacity-75"
          }
          to={"/About Me"}
        >
          About Me
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 flex items-center  uppercase underline-offset-4 decoration-[#49E1D8] md:decoration-[#1C586B] underline decoration-2 font-marcellus leading-snug  hover:opacity-75"
              : "px-3 py-2 flex items-center uppercase underline-offset-4 hover:decoration-[#49E1D8] md:hover:decoration-[#1C586B] hover:underline hover:decoration-2 font-marcellus leading-snug  hover:opacity-75"
          }
          to={"/Contact"}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
