import { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import { ReactComponent as Dots } from "../../../assets/Users/three-dots.svg";

const ThreeDotsMenu = () => {
  //menu achor element state:
  const [anchorEl, setAnchorEl] = useState(null);

  const anchorHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box width="100%" height="100%">
      <IconButton size="large" onClick={anchorHandler}>
        <Dots />
      </IconButton>
      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem>Edit User</MenuItem>
        <MenuItem>Flag User</MenuItem>
        <Divider />
        <MenuItem sx={{ color: "#EF4444" }}>Delete User</MenuItem>
      </Menu>
    </Box>
  );
};

export default ThreeDotsMenu;
