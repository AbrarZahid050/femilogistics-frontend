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

//redux imports:
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllUsers,
  getUsersStatus,
  getUsersError,
  fetchUsers,
} from "../../redux/slices/userSlice";
import { useEffect } from "react";

const User = () => {
  const dispatch = useDispatch();

  const usersList = useSelector(selectAllUsers);
  const requestStatus = useSelector(getUsersStatus);
  const error = useSelector(getUsersError);

  const [isModal, setModal] = useState(false);

  const handleModalClick = (event) => {
    setModal((preVal) => !preVal);
  };

  useEffect(() => {
    if (requestStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [requestStatus, dispatch]);

  // console.log(requestStatus);

  let content;

  if (requestStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (requestStatus === "succeeded") {
    content = (
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
                  {usersList.results.map((cellValue, index) => {
                    return (
                      <TableRow key={nanoid()} sx={{ p: 0 }}>
                        <TableCell>{cellValue.name}</TableCell>
                        <TableCell>{cellValue.name}</TableCell>
                        <TableCell>{cellValue.email}</TableCell>
                        <TableCell>{cellValue.phone}</TableCell>
                        <TableCell>{cellValue.role}</TableCell>
                        <TableCell
                          width="25px"
                          sx={{ p: 1, textAlign: "center" }}
                        >
                          <Box width="100%" height="100%">
                            <IconButton size="large">
                              <Dots />
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
        <NewUserModal open={isModal} onclose={handleModalClick} />
      </Box>
    );
  }

  return <>{content}</>;
};

export default User;
