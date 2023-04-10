import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//styling imports:
import classes from "./sideDrawer.module.css";
// import "./style.css";

//svg imports:
import carrier from "../../assets/SideDrawerImages/carrier.svg";
import customer from "../../assets/SideDrawerImages/customer.svg";
import loads from "../../assets/SideDrawerImages/loads.svg";
import loads_arrow from "../../assets/SideDrawerImages/loads_arrow.svg";
import overview from "../../assets/SideDrawerImages/overview.svg";
import user from "../../assets/SideDrawerImages/user.svg";

const SideDrawer = () => {
  const [isLoadsArrow, setIsLoadsArrow] = useState(false);
  const navigate = useNavigate ();
  const location = useLocation()
  
  const sideDrawerLisnk = [
    {
      link_image: overview,
      link_text: "Overview",
      goto: "/overview",
    },
    {
      link_image: customer,
      link_text: "Customer",
      goto: "/customer",
    },
    {
      link_image: carrier,
      link_text: "Carrier",
      goto: "/carrier",
    },
    {
      link_image: user,
      link_text: "User",
      goto: "/user",
    },
    {
      link_image: loads,
      link_text: "Loads",
    },
  ];

  return (
    <div className={classes.main_side_drawer_wrapper}>
      <h2>Main</h2>
      <div className={classes.side_drawer_wrapper}>
        {sideDrawerLisnk.map((e) => (
          <div
            key={nanoid()}
            className={e.goto === location.search.slice(1) ? classes.link_wrapper_active : classes.link_wrapper}
            onClick={() => {
              e.link_text === "Loads" && setIsLoadsArrow(!isLoadsArrow);
              e.link_text !== "Loads" && navigate({pathname: '/panel', search:e.goto});
            }}
          >
            <img
              src={e.link_image}
              alt=""
              className={classes.link_wrapper_image}
            />
            <p>{e.link_text}</p>
            {e.link_text === "Loads" && (
              <img
                src={loads_arrow}
                alt=""
                className={
                  isLoadsArrow
                    ? classes.loads_arrow_icon
                    : classes.loads_arrow_icon_reverse
                }
              />
            )}
          </div>
        ))}
        {isLoadsArrow && (
          <div className={classes.loads_dropdown_wrapper}>
            <div className={classes.loads_link_wrapper}>
              <p>All Loads</p>
              <span>195</span>
            </div>
            <div className={classes.loads_link_wrapper}>
              <p>Canceled</p>
              <span>2</span>
            </div>
            <div className={classes.loads_link_wrapper}>
              <p>Delivered</p>
              <span>8</span>
            </div>
            <div className={classes.loads_link_wrapper}>
              <p>Available</p>
              <span>4</span>
            </div>
            <div className={classes.loads_link_wrapper}>
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
