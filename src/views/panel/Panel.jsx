import React from "react";
import { useLocation } from "react-router-dom";
import Carrier from "../carrier/Carrier";
import Customer from "../customer/Customer";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../navbar/Navbar";
import SideDrawer from "../sideDrawer/SideDrawer";
import User from "../user/User";
const Panel = () => {
  const location = useLocation();

  const showComp = () => {
    switch (location.search.slice(1)) {
      case "/overview":
        return <Dashboard />;
      case "/carrier":
        return <Carrier />;
      case "/user":
        return <User />;
      case "/customer":
        return <Customer />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideDrawer />
        {showComp()}
      </div>
    </>
  );
};

export default Panel;
