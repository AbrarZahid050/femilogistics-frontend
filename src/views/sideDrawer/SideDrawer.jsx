import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from "react";
import carrier from "../../assets/SideDrawerImages/carrier.svg";
import customer from "../../assets/SideDrawerImages/customer.svg";
import loads from "../../assets/SideDrawerImages/loads.svg";
import loads_arrow from "../../assets/SideDrawerImages/loads_arrow.svg";
import overview from "../../assets/SideDrawerImages/overview.svg";
import user from "../../assets/SideDrawerImages/user.svg";
import "./style.css";
const SideDrawer = () => {
  const [isLoadsArrow, setIsLoadsArrow] = useState(false);
  const sideDrawerLisnk = [
    {
      link_image: overview,
      link_text: "Overview",
    },
    {
      link_image: customer,
      link_text: "Customer",
    },
    {
      link_image: carrier,
      link_text: "Carrier",
    },
    {
      link_image: user,
      link_text: "User",
    },
    {
      link_image: loads,
      link_text: "Loads",
    },
  ];
  return (
    <div className="main-side-drawer-wrapper">
      <h2>Main</h2>
      <div className="side-drawer-wrapper">
        {sideDrawerLisnk.map((e) => (
          <div
          key={nanoid()}
            className="link-wrapper"
            onClick={() => {
              e.link_text === "Loads" && setIsLoadsArrow(!isLoadsArrow);
            }}
          >
            <img src={e.link_image} alt="" className="link-wrapper-image" />
            <p>{e.link_text}</p>
            {e.link_text === "Loads" && (
              <img
                src={loads_arrow}
                alt=""
                className={
                  isLoadsArrow ? "loads-arrow-icon" : "loads-arrow-icon-reverse"
                }
              />
            )}
          </div>
        ))}
        {isLoadsArrow && (
          <div className="loads-dropdown-wrapper">
            <div className="loads-link-wrapper">
              <p>All Loads</p>
              <span>195</span>
            </div>
            <div className="loads-link-wrapper">
              <p>Canceled</p>
              <span>2</span>
            </div>
            <div className="loads-link-wrapper">
              <p>Delivered</p>
              <span>8</span>
            </div>
            <div className="loads-link-wrapper">
              <p>Available</p>
              <span>4</span>
            </div>
            <div className="loads-link-wrapper">
              <p>In Transit</p>
              <span>9</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideDrawer;
