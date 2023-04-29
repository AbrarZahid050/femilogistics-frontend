import { useState } from "react";
import { useDispatch } from "react-redux";

//custom imports:
// import useAuth from "../../hooks/useAuth";
// import Cookies from "js-cookie";

//styling imports:
import {
  Box,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { NavbarBtn } from "../../components/Styles/StyledBtns.js";
import { StyledMenu } from "./StyledMenu";
import "./style.css";

//svg imports:
import avatar from "../../assets/NavbarImages/avatar.jpg";
import bell_icon from "../../assets/NavbarImages/bell_icon.svg";
import { ReactComponent as PlusOrder } from "../../assets/NavbarImages/plus_order.svg";
import { ReactComponent as Search } from "../../assets/NavbarImages/search.svg";
import { setLogout } from "../../redux/slices/authSlice";

const Navbar = () => {
  // const { setAuth } = useAuth();

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    if (event.target.getAttribute("name") === "signOut") {
      // Cookies.remove("accessToken");
      // setAuth({});

      dispatch(setLogout());
    }
    setAnchorEl(null);
  };

  return (
    <div className="main-navbar-container">
      <div className="navbar-wrapper-left">
        <div className="left-name-wrapper">
          <h2>Triton</h2>
        </div>
        <div className="search-wrapper">
          <Stack spacing={2} direction="row">
            <NavbarBtn startIcon={<PlusOrder />}>New Order</NavbarBtn>
            <NavbarBtn>
              <Search />
            </NavbarBtn>
          </Stack>
        </div>
      </div>

      <div className="navbar-wrapper-right">
        <img src={bell_icon} alt="error" className="bell-icon-image" />
        <Tooltip title="Account Settings" arrow placement="left">
          <IconButton
            size="small"
            id="demo-customized-menu"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img src={avatar} alt="error" className="avatar-image" />
          </IconButton>
        </Tooltip>

        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ padding: 2 }}>
            <Typography>Hello</Typography>
            <Typography sx={{ fontWeight: "bold" }}>John Trivolta</Typography>
          </Box>
          <Divider />
          <MenuItem>View my Profile</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Change Password</MenuItem>
          <Divider />
          <MenuItem>Subscriptions</MenuItem>
          <MenuItem>Invite Friends</MenuItem>
          <MenuItem>Send Feedback</MenuItem>
          <MenuItem>Terms and Conditions</MenuItem>
          <MenuItem>Privacy Policy</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} name="signOut">
            Sign Out
          </MenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};

export default Navbar;
