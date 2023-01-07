import React from "react";
import ThemeChanger from "./ThemeChanger";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-transparent  flex w-full justify-between items-center pt-2 px-5 ">
      <div>
        <span className="text-[25px]">
          <Link to="/">Vivek </Link>
        </span>
      </div>
      <div className="flex  justify-between">
        <ThemeChanger />
      </div>
    </nav>
  );
}

export default Navigation;
