import { useState } from "react";
import {
  Box,
  Stack,
  TableContainer,
  Typography,
  Paper,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import SortBy from "./components/SortBy";
import { NavbarBtn } from "../../components/Styles/StyledBtns";
import { ReactComponent as Plus } from "../../assets/Users/plus.svg";
import { ReactComponent as Dots } from "../../assets/Users/three-dots.svg";
import { nanoid } from "@reduxjs/toolkit";
import NewUserModal from "./components/Modal/NewUserModal";

const User = () => {
  const [isModal, setModal] = useState(false);

  const handleModalClick = (event) => {
    setModal((preVal) => !preVal);
  };

  return (
    <Box width="100%" height="100%" p={2}>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" fontSize="20px">
            User List
          </Typography>

          <Box display="flex" alignItems="center" flexDirection="row" gap={2}>
            <SortBy />
            <NavbarBtn
              sx={{
                background: "#FFFFFF",
                borderRadius: "10px",
              }}
              onClick={handleModalClick}
            >
              <Plus />
            </NavbarBtn>
          </Box>
        </Stack>

        <Box width="100%">
          <TableContainer
            component={Paper}
            sx={{
              border: "1px solid #9CA3AF",
              boxShadow:
                "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
              borderRadius: "8px",
            }}
          >
            <Table>
              <TableHead sx={{ background: "#F9FAFB" }}>
                <TableRow sx={{ p: 0 }}>
                  {["USERNAME", "NAME", "EMAIL", "PHONE", "ROLE"].map(
                    (heading) => (
                      <TableCell
                        sx={{ color: "#6B7280", width: "100px", p: 1 }}
                        key={nanoid()}
                      >
                        {heading}
                      </TableCell>
                    )
                  )}
                  <TableCell width="25px"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ p: 0 }}>
                  {[
                    "A0B1C010",
                    "Pacome Anjorin",
                    "jessica.hanson@example.com",
                    "+56-955-525-285",
                    "Driver",
                  ].map((cellValue, index) => {
                    //last cell has text-align: center property, hence checking indexs!
                    if (index <= 3) {
                      return (
                        <TableCell
                          key={nanoid()}
                          sx={
                            index === 1 ? { p: 1, color: "#0062FF" } : { p: 1 }
                          }
                        >
                          {cellValue}
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell
                          key={nanoid()}
                          sx={{ p: 1, textAlign: "center" }}
                        >
                          <Box
                            display="inline-block"
                            borderRadius={1}
                            p="5px"
                            bgcolor="#F2F4F7"
                          >
                            {cellValue}
                          </Box>
                        </TableCell>
                      );
                    }
                  })}
                  <TableCell width="25px" sx={{ p: 1, textAlign: "center" }}>
                    <Box width="100%" height="100%">
                      <IconButton size="large">
                        <Dots />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
      <NewUserModal open={isModal} onclose={handleModalClick} />
    </Box>
  );
};

export default User;
