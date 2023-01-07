import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Buttons = (props) => {
  return (
    <div className="frame m-[20px]">
      <Link to={props.path} className="custom-btn  btn-3">
        <span>{props.title}</span>
      </Link>
    </div>
  );
};
export const Buttons7 = (props) => {
  return (
    <div className="frame ">
      <Link to={props.path} className="custom-btn  btn-7">
        <span >{props.title}</span>
      </Link>
    </div>
  );
};

export default Buttons;
