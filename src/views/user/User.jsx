import { useState, useEffect } from "react";

//custom components:
import SortBy from "./components/SortBy";
import NewUserModal from "./components/Modal/NewUserModal";
import ThreeDotsMenu from "./components/ThreeDotsMenu";

//custom styling components:
import { NavbarBtn } from "../../components/Styles/StyledBtns";

//mui stylying components:
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
  CircularProgress,
} from "@mui/material";

//svg imports:
import { ReactComponent as Plus } from "../../assets/Users/plus.svg";

//redux imports:
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllUsers,
  getUsersStatus,
  // getUsersError,
  fetchUsers,
  deleteUser,
} from "../../redux/slices/userSlice";
import DeleteUserModal from "./components/Modal/DeleteUserModal";

const roles = [
  "SystemAdmin",
  "OfficeAdmin",
  "AccountAdmin",
  "Operations",
  "Developer",
  "Super Admin",
];

const User = () => {
  const dispatch = useDispatch();

  //redux selector:
  const usersList = useSelector(selectAllUsers);
  const requestStatus = useSelector(getUsersStatus);
  // const error = useSelector(getUsersError);

  //have 2 modals in total:
  //==> newCustomerModal. ==> userDeleteModal.
  const [displayNewCustomerModal, setNewCustomerModal] = useState(false);
  const [displayDeleteCustomerModal, setModalForDelete] = useState(false);
  const [userInfoforDeleteModal, setUserInfo] = useState(null);

  const handleNewCustomerModalClick = () => {
    setNewCustomerModal((preVal) => !preVal);
  };

  const handleDeleteModalClick = (_, userId) => {
    console.log(userId);
    if (userId) {
      const userName = usersList.find((val) => val.id === userId);
      setUserInfo(userName);
    } else if (!userId) {
      setUserInfo(null);
    }
    setModalForDelete((preVal) => !preVal);
  };

  const deleteUserClickHandler = () => {
    dispatch(deleteUser(userInfoforDeleteModal.id));
    setModalForDelete(false);
  };

  useEffect(() => {
    if (requestStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [requestStatus, dispatch]);

  let content;

  if (requestStatus === "loading") {
    content = (
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack alignItems="center">
          <CircularProgress size="100px" />
          <Typography variant="h5">Loading...</Typography>
        </Stack>
      </Box>
    );
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
                onClick={handleNewCustomerModalClick}
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
                  {usersList.map((cellValue, index) => {
                    return (
                      <TableRow key={nanoid()} sx={{ p: 0 }}>
                        <TableCell sx={{ borderBottom: "none" }}>
                          {cellValue.username}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none", color: "#0062FF" }}
                        >
                          {cellValue.username}
                        </TableCell>
                        <TableCell sx={{ borderBottom: "none" }}>
                          {cellValue.email}
                        </TableCell>
                        <TableCell sx={{ borderBottom: "none" }}>
                          {cellValue.phone}
                        </TableCell>
                        <TableCell sx={{ borderBottom: "none" }}>
                          {cellValue.role}
                        </TableCell>
                        <TableCell
                          width="25px"
                          sx={{
                            p: 1,
                            textAlign: "center",
                            borderBottom: "none",
                          }}
                        >
                          <ThreeDotsMenu
                            userId={cellValue.id}
                            deleteUserHandlerProps={(userId) => {
                              const args = null;
                              console.log(userId);
                              handleDeleteModalClick(args, userId);
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            {/* pagination code */}
          </Box>
        </Stack>
        <NewUserModal
          open={displayNewCustomerModal}
          onclose={handleNewCustomerModalClick}
        />
        <DeleteUserModal
          open={displayDeleteCustomerModal}
          cancelHandler={handleDeleteModalClick}
          deleteHandler={deleteUserClickHandler}
          username={userInfoforDeleteModal?.username}
        />
      </Box>
    );
  } else if (requestStatus === "failed") {
    content = <Typography>Error!</Typography>;
  }

  return <>{content}</>;
};

export default User;
