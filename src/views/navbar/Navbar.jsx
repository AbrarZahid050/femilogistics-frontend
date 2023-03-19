import React from "react";
import avatar from "../../assets/NavbarImages/avatar.jpg";
import bell_icon from "../../assets/NavbarImages/bell_icon.svg";
import plus_order from "../../assets/NavbarImages/plus_order.svg";
import search from "../../assets/NavbarImages/search.svg";
import "./style.css";
const Navbar = () => {
  return (
    <div className="main-navbar-container">
      <div className="navbar-wrapper-left">
        <div className="left-name-wrapper">
          <h2>Triton</h2>
        </div>
        <div className="search-wrapper">
          <div className="new-order-wrapper">
            <img src={plus_order} alt="error" />
            <p>New Order</p>
          </div>
          <img src={search} alt="error" className="search-icon" />
        </div>
      </div>
      <div className="navbar-wrapper-right">
        <img src={bell_icon} alt="error" className="bell-icon-image" />
        <img src={avatar} alt="error" className="avatar-image" />
      </div>
    </div>
  );
};

export default Navbar;
