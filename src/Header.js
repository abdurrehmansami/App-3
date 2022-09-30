import React from "react";
import HeaderApi from "./HeaderApi";
import "./index.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex-container">
      {HeaderApi.map((curElem) => {
        return (
          <>
            <div>
              <h3>{curElem.heading}</h3>
              <p>{curElem.para}</p>

              <NavLink to={curElem.page}>More Info</NavLink>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Header;
