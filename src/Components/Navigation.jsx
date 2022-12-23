import React from "react";
import ThemeChanger from "./ThemeChanger";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-transparent flex w-full justify-between items-center px-5 ">
      <div>
        <span className="text-[24px]">
          <Link to="/">Vivek Kumar</Link>
        </span>
      </div>
      <div className="flex  justify-between">
        <ThemeChanger />
      </div>
    </nav>
  );
}

export default Navigation;
