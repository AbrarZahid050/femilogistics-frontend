import { useState } from "react";

//mui styling components:
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
} from "@mui/material";

//svg import:
import { ReactComponent as Dots } from "../../../assets/Users/three-dots.svg";

const ThreeDotsMenu = ({ userId, deleteUserHandlerProps }) => {
  //menu achor element state:
  const [anchorEl, setAnchorEl] = useState(null);

  const deleteUserHandler = () => {
    deleteUserHandlerProps(userId);
    handleClose();
  };

  const anchorHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box width="100%" height="100%">
      <Tooltip title="Edit User">
        <IconButton size="large" onClick={anchorHandler}>
          <Dots />
        </IconButton>
      </Tooltip>
      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem>Edit User</MenuItem>
        <MenuItem>Flag User</MenuItem>
        <Divider />
        <MenuItem sx={{ color: "#EF4444" }} onClick={deleteUserHandler}>
          Delete User
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ThreeDotsMenu;
