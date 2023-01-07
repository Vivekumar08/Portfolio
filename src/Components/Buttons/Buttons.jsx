import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Buttons = (props) => {
  if (props.href) {
    return (
      <div className="frame ">
        <a href={props.href} className="custom-btn  btn-3">
          <span>{props.title}</span>
        </a>
      </div>
    );
  }
  if (props.to) {
    return (
      <div className="frame ">
        <Link to={props.path} className="custom-btn  btn-3">
          <span>{props.title}</span>
        </Link>
      </div>
    );
  }
  return (
    <div className="frame ">
      <button
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        className="custom-btn  btn-3"
      >
        <span>{props.title}</span>
      </button>
    </div>
  );
};

export const Buttons7 = (props) => {
  if (props.href) {
    return (
      <div className="frame ">
        <a href={props.href} className="custom-btn  btn-7">
          <span>{props.title}</span>
        </a>
      </div>
    );
  }
  if (props.to) {
    return (
      <div className="frame ">
        <Link to={props.path} className="custom-btn  btn-7">
          <span>{props.title}</span>
        </Link>
      </div>
    );
  }
  return (
    <div className="frame ">
      <button
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        className="custom-btn  btn-7"
      >
        <span>{props.title}</span>
      </button>
    </div>
  );
};

export default Buttons;
