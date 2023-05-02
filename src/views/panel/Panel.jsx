import React from "react";
import { useLocation } from "react-router-dom";
import Carrier from "../carrier/Carrier";
import Customer from "../customer/Customer";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../navbar/Navbar";
import SideDrawer from "../sideDrawer/SideDrawer";
import User from "../user/User";
import { Stack } from "@mui/material";
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
      <Stack direction="row" overflow="auto">
        <SideDrawer />
        {showComp()}
      </Stack>
    </>
  );
};

export default Panel;
