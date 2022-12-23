import React, { useContext } from "react";
import ThemeContext, { themes } from "../Context/ContextProvider";
import { WiMoonAltThirdQuarter, WiMoonAltFull } from "react-icons/wi";

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themetoggle = () => {
    console.log(theme)
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <div className="text-[28px] p-2 font-bold cursor-pointer" onClick={themetoggle}>
      {theme === themes.dark ? <WiMoonAltThirdQuarter /> : <WiMoonAltFull />}
    </div>
  );
};

export default ThemeChanger;
