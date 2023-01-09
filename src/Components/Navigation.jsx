import React from "react";
import ThemeChanger from "./ThemeChanger";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-transparent  flex w-full justify-between items-center pt-2 px-5 ">
      <div>
        <span className="md:text-[25px] text-[20px]">
          <Link to="/">Vivek </Link>
        </span>
      </div>
      <div className="flex items-center gap-5 text-[14px] md:text-base justify-between">
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link to={"/About Me"} className="">About Me</Link>
        <Link to={"/Contact"}>Contact</Link>

        <ThemeChanger />
      </div>
    </nav>
  );
}

export default Navigation;
