import React from "react";
import "../../style/layout/header.css";
const Header = props => {
  return (
    <div className="header">
      <ul className="nav header">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Getting Started</a>
        </li>
        <li>
          <a href="#">Pool Blocks</a>
        </li>
        <li>
          <a className="active" href="#">Payments</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
