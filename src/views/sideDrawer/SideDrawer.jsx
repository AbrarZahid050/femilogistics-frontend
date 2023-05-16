import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//styling imports
import classes from "./sideDrawer.module.css";

//svg imports:
import carrier from "../../assets/SideDrawerImages/carrier.svg";
import customer from "../../assets/SideDrawerImages/customer.svg";
import loads from "../../assets/SideDrawerImages/loads.svg";
import loads_arrow from "../../assets/SideDrawerImages/loads_arrow.svg";
import overview from "../../assets/SideDrawerImages/overview.svg";
import user from "../../assets/SideDrawerImages/user.svg";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";

import { List } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [isLoadsArrow, setIsLoadsArrow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    <>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            position: "relative",
            top: "0",
            minHeight: "100vh",
            overflow: "hidden",
          },
        }}
      >
        <div className={classes.main_side_drawer_wrapper}>
          <IconButton
            onClick={handleDrawerOpen}
            sx={{
              ...(open && { display: "none" }),
              "&:hover": {
                bgcolor: "#000029",
              },
            }}
          >
            <MenuIcon style={{ color: "white", margin: "10px" }} />
          </IconButton>
          <DrawerHeader
            sx={{
              ...(!open && { display: "none" }),
            }}
          >
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                ...(!open && { display: "none" }),
                "&:hover": {
                  bgcolor: "#000029",
                },
              }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon style={{ color: "white" }} />
              ) : (
                <ChevronLeftIcon style={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <h2 style={{ paddingLeft: open ? "22px" : "10px" }}>Main</h2>
          <List>
            {sideDrawerLisnk.map((e, index) => (
              <ListItem key={nanoid()} disablePadding>
                <ListItemButton
                  key={nanoid()}
                  className={
                    e.goto === location.search.slice(1)
                      ? classes.link_wrapper_active
                      : classes.link_wrapper
                  }
                  onClick={() => {
                    e.link_text === "Loads" && setIsLoadsArrow(!isLoadsArrow);
                    e.link_text !== "Loads" &&
                      navigate({ pathname: "/panel", search: e.goto });
                  }}
                >
                  <img
                    src={e.link_image}
                    alt=""
                    className={classes.link_wrapper_image}
                  />
                  <p style={{ paddingLeft: open ? "0px" : "14px" }}>
                    {e.link_text}
                  </p>
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
                </ListItemButton>
              </ListItem>
            ))}
            {isLoadsArrow && (
              <div
                className={classes.loads_dropdown_wrapper}
                style={{ marginLeft: open ? "-4px" : "20px" }}
              >
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
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default SideDrawer;
