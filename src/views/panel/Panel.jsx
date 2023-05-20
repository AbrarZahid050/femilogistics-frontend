import React from "react";
import { Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import Carrier from "../carrier/Carrier";
import Customer from "../customer/Customer";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../navbar/Navbar";
import SideDrawer from "../sideDrawer/SideDrawer";
import User from "../../views/user/User";
import Profile from "../Profile/Profile";
import SendFeedback from "../sendFeedback/SendFeedback";
import Terms from "../termsAndConditions/Terms";
import PrivatePolicy from "../termsAndConditions/PrivatePolicy";
import Subs from "../subs/Subs";
import CustomerDetail from "../customer/customerDetail/CustomerDetail";

const Panel = () => {
  const location = useLocation();

  const showComp = () => {
    switch (location.search.slice(1)) {
      case "/customer/newcustomer":
        return <CustomerDetail />;

      case "/overview":
        return <Dashboard />;

      case "/profile":
        return <Profile />;

      case "/sendfeedback":
        return <SendFeedback />;

      case "/terms":
        return <Terms />;

      case "/policy":
        return <PrivatePolicy />;

      case "/subs":
        return <Subs />;

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
      <Stack direction="row" overflow="auto" sx={{ bgcolor: "#FAFAFA" }}>
        <SideDrawer />
        {showComp()}
      </Stack>
    </>
  );
};

export default Panel;
