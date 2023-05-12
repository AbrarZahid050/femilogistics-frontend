import { useState } from "react";
import { useDispatch } from "react-redux";

//react-router imports:
import { useNavigate } from "react-router-dom";

//custom imports:
import {
  CancelBtn,
  LoginBtn,
  StyledInput,
  StyledLabel,
} from "../../components/Styles/StyledBtns.js";
import { setLogout } from "../../redux/slices/authSlice";
import CustomInput from "../carrier/components/InputFields/CustomInput";
// import useAuth from "../../hooks/useAuth";
// import Cookies from "js-cookie";

//styling imports:
import {
  Box,
  Card,
  Divider,
  IconButton,
  MenuItem,
  Modal,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { NavbarBtn } from "../../components/Styles/StyledBtns.js";
import { StyledMenu } from "./StyledMenu";
import "./style.css";

//svg imports:
import avatar from "../../assets/NavbarImages/avatar.jpg";
import { ReactComponent as Bell } from "../../assets/NavbarImages/bell_icon.svg";
import { ReactComponent as PlusOrder } from "../../assets/NavbarImages/plus_order.svg";
import { ReactComponent as Search } from "../../assets/NavbarImages/search.svg";

const FeedbackModal = ({ open, onclose }) => {
  return (
    <Modal
      open={open}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: "500px" }}>
        <Box bgcolor="#282842" p={2} width="100%">
          <Typography variant="h6" color="white">
            SEND FEEDBACK
          </Typography>
        </Box>
        <Box p={2}>
          <Box
            component={Paper}
            variant="outlined"
            p={2}
            gap={1}
            display="flex"
            flexDirection="column"
          >
            <CustomInput>
              <StyledLabel>Email</StyledLabel>
              <StyledInput fullWidth name="email" />
            </CustomInput>

            <CustomInput doNotAlign={true}>
              <StyledLabel>Message</StyledLabel>
              <StyledInput fullWidth name="message" multiline rows={5} />
            </CustomInput>
          </Box>
          <Box display="flex" gap={1} marginTop={2}>
            <CancelBtn variant="contained" fullWidth onClick={onclose}>
              cancel
            </CancelBtn>
            <LoginBtn variant="contained" fullWidth>
              submit
            </LoginBtn>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
};

const Navbar = () => {
  // const { setAuth } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [isModal, setModal] = useState(false);

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

  const handleFeedbackModal = () => {
    setModal((preVal) => !preVal);
  };

  return (
    <Box
      padding="16px 10px"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      bgcolor="#FFFFFF"
      boxShadow="inset 0px -1px 0px #E2E2EA"
    >
      <Box>
        <Box display="inline-block" minWidth="230px">
          <Typography fontSize="20px" variant="h6" color="#44444F">
            Fermi Logistics
          </Typography>
        </Box>

        <Box display="inline-block">
          <Stack spacing={2} direction="row">
            <NavbarBtn startIcon={<PlusOrder />}>New Order</NavbarBtn>
            <NavbarBtn>
              <Search />
            </NavbarBtn>
          </Stack>
        </Box>
      </Box>
      <Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton>
            <Bell />
          </IconButton>

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
            <MenuItem
              onClick={(event) => {
                navigate({ pathname: "/panel", search: "/profile" });
                handleClose(event);
              }}
            >
              View my Profile
            </MenuItem>
            <MenuItem>Edit Profile</MenuItem>
            <MenuItem>Change Password</MenuItem>
            <Divider />
            <MenuItem
              onClick={(event) => {
                navigate({ pathname: "/panel", search: "/subs" });
                handleClose(event);
              }}
            >
              Subscriptions
            </MenuItem>
            <MenuItem>Invite Friends</MenuItem>
            <MenuItem
              onClick={(event) => {
                handleFeedbackModal();
                handleClose(event);
              }}
            >
              Send Feedback
            </MenuItem>
            <MenuItem
              onClick={(event) => {
                navigate({ pathname: "/panel", search: "/terms" });
                handleClose(event);
              }}
            >
              Terms and Conditions
            </MenuItem>
            <MenuItem
              onClick={(event) => {
                navigate({ pathname: "/panel", search: "/policy" });
                handleClose(event);
              }}
            >
              Privacy Policy
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose} name="signOut">
              Sign Out
            </MenuItem>
          </StyledMenu>
        </Stack>
      </Box>
      <FeedbackModal open={isModal} onclose={handleFeedbackModal} />
    </Box>
  );
};

export default Navbar;

//--------------------------------------------------------------------------//
// <div className="main-navbar-container">
//   <div className="navbar-wrapper-left">
//     <div className="left-name-wrapper">
//       <h2>Triton</h2>
//     </div>
//     <div className="search-wrapper">
//       <Stack spacing={2} direction="row">
//         <NavbarBtn startIcon={<PlusOrder />}>New Order</NavbarBtn>
//         <NavbarBtn>
//           <Search />
//         </NavbarBtn>
//       </Stack>
//     </div>
//   </div>

//   <div className="navbar-wrapper-right">
//     <img src={bell_icon} alt="error" className="bell-icon-image" />
//     <Tooltip title="Account Settings" arrow placement="left">
//       <IconButton
//         size="small"
//         id="demo-customized-menu"
//         aria-controls={open ? "demo-customized-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//       >
//         <img src={avatar} alt="error" className="avatar-image" />
//       </IconButton>
//     </Tooltip>

//     <StyledMenu
//       id="demo-customized-menu"
//       MenuListProps={{
//         "aria-labelledby": "demo-customized-button",
//       }}
//       anchorEl={anchorEl}
//       open={open}
//       onClose={handleClose}
//     >
//       <Box sx={{ padding: 2 }}>
//         <Typography>Hello</Typography>
//         <Typography sx={{ fontWeight: "bold" }}>John Trivolta</Typography>
//       </Box>
//       <Divider />
//       <MenuItem>View my Profile</MenuItem>
//       <MenuItem>Edit Profile</MenuItem>
//       <MenuItem>Change Password</MenuItem>
//       <Divider />
//       <MenuItem>Subscriptions</MenuItem>
//       <MenuItem>Invite Friends</MenuItem>
//       <MenuItem>Send Feedback</MenuItem>
//       <MenuItem>Terms and Conditions</MenuItem>
//       <MenuItem>Privacy Policy</MenuItem>
//       <Divider />
//       <MenuItem onClick={handleClose} name="signOut">
//         Sign Out
//       </MenuItem>
//     </StyledMenu>
//   </div>
// </div>
