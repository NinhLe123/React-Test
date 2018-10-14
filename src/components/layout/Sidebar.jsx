import React from "react";
import "../../style/layout/sidebar.css";

const Sidebar = props => {
  return (
    <div className="sidebar">
      <div className="logo" >
        <img src="image/logo.png"  alt="Norway" />
      </div>
      <div className="menu">
        <li>
          <a href="">
            <i className="fa fa-home" /> <span>Home</span>
          </a>
        </li>
        <li className="treeview active menu-open">
          <a href="">
            <img className="icon-sidebar" src="image/icon2.png"  alt="Norway" />
            <span>Pools</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-up pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li className="active">
              <a href="">
              <img className="icon-sidebar" src="image/icon1.png"  alt="Norway" /> Z-Cash
              </a>
            </li>
            <li className="active">
              <a style={{color: "#11c786" }} href="">
              <img className="icon-sidebar" src="image/icon2.png"  alt="Norway" /> Monero
              </a>
            </li>
            <li className="active">
              <a href="">
              <img className="icon-sidebar" src="image/icon1.png"  alt="Norway" /> Electroneum
              </a>
            </li>
            <li className="active">
              <a href="">
              <img className="icon-sidebar" src="image/icon1.png"  alt="Norway" /> Etherium
              </a>
            </li>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
