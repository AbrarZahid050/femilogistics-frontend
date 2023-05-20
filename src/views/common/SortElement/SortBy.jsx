import { useState } from "react";
import { Box, Menu, IconButton, Typography } from "@mui/material";
import { ReactComponent as Expand } from "../../../assets/DashboardImages/dropdown_arrow.svg";

const Customer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [checkbox, setCheck] = useState("All");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget.parentElement.parentElement.parentElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckClick = (event) => {
    const key = event.target.attributes[1].value;
    if (
      key === "All" ||
      key === "Admins" ||
      key === "SubAdmins" ||
      key === "Users"
    ) {
      setCheck(key);
    }
  };

  return (
    <Box>
      {/* wrapper */}
      <Box
        bgcolor="#FFFFFF"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        border="0.5px solid #E5E7EB"
        boxShadow="0px 3px 8px -1px rgba(50, 50, 71, 0.05)"
        filter="drop-shadow(0px 0px 1px rgba(12, 26, 75, 0.24))"
        borderRadius="10px"
        width="180px"
        height="38px"
      >
        {/* content */}
        <Box marginLeft={1}>Sort by: {checkbox}</Box>
        {/* icon wrapper */}
        <Box
          borderLeft="0.5px solid #E5E7EB"
          height="38px"
          display="flex"
          alignItems="center"
        >
          <Box>
            <IconButton onClick={handleClick}>
              <Expand />
            </IconButton>
          </Box>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          elevation={0}
          sx={{
            borderRadius: 0,
            boxShadow: "0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
            filter: "drop-shadow(0px 0px 1px rgba(12, 26, 75, 0.24))",
          }}
        >
          <Box width="180px" p={1}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>All</Typography>

              <input
                type="checkbox"
                label="All"
                checked={checkbox === "All"}
                onChange={handleCheckClick}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>Admin</Typography>
              <input
                type="checkbox"
                label="Admins"
                checked={checkbox === "Admins"}
                onChange={handleCheckClick}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>Sub-Admins</Typography>
              <input
                type="checkbox"
                label="SubAdmins"
                checked={checkbox === "SubAdmins"}
                onChange={handleCheckClick}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>Users</Typography>
              <input
                type="checkbox"
                label="Users"
                checked={checkbox === "Users"}
                onChange={handleCheckClick}
              />
            </Box>
          </Box>
        </Menu>
      </Box>
    </Box>
  );
};

export default Customer;
