import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem({ link, label, handleClick }) {
  return (
    <ul className="menuBtn">
      <li>
        <NavLink to={link} onClick={handleClick}>
          {label}
        </NavLink>
      </li>
    </ul>
  );
}

export default MenuItem;
