import { useState, useEffect } from "react";

//custom components:
import SortBy from "../common/SortElement/SortBy";
import NewUserModal from "./components/Modal/NewUserModal";
import ThreeDotsMenu from "./components/ThreeDotsMenu";
import DeleteUserModal from "./components/Modal/DeleteUserModal";

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
  Tooltip,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

//svg imports:
import { ReactComponent as Plus } from "../../assets/Users/plus.svg";

//redux imports:
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllUsers,
  getUsersStatus,
  getUsersError,
  fetchUsers,
  deleteUser,
  getCount,
} from "../../redux/slices/userSlice";
import { grey } from "@mui/material/colors";
import CustomPagination from "./components/Pagination/CustomPagination";

const roles = [
  "System Admin",
  "Office Admin",
  "Accounts Admin",
  "Operations",
  "Developer",
  "Super Admin",
  "Integration",
  "Driver",
];

const User = () => {
  const dispatch = useDispatch();

  //redux selector:
  const usersList = useSelector(selectAllUsers);
  const count = useSelector(getCount);
  const requestStatus = useSelector(getUsersStatus);
  const error = useSelector(getUsersError);

  //have 2 modals in total:
  //1) newCustomerModal. 2) userDeleteModal.
  const [displayNewCustomerModal, setNewCustomerModal] = useState(false);
  const [displayDeleteCustomerModal, setModalForDelete] = useState(false);
  const [userInfoforDeleteModal, setUserInfo] = useState(null);

  //pagination's state:
  const [currentPage, setPage] = useState(1);
  const limit = 10;

  const handleNewCustomerModalClick = () => {
    setNewCustomerModal((preVal) => !preVal);
  };

  //handler to change the page, this is passed as a props to CustomPagination.
  const pageChangeHandler = (event, pageNumber) => {
    dispatch(fetchUsers(limit * (pageNumber - 1)));
    setPage(pageNumber);
  };

  //this handler is responsible for toggling the modal for deleting users.
  const handleDeleteModalClick = (_, userId) => {
    if (userId) {
      //finding the detail of the user which is to be deleted,
      //only used for displaying the name.
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
      dispatch(fetchUsers(limit * (currentPage - 1)));
    }
  }, [requestStatus, dispatch, currentPage]);

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
              <Tooltip title="Create New User">
                <NavbarBtn
                  sx={{
                    background: "#FFFFFF",
                    borderRadius: "10px",
                  }}
                  onClick={handleNewCustomerModalClick}
                >
                  <Plus />
                </NavbarBtn>
              </Tooltip>
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
                          key={nanoid()}
                          sx={
                            heading === "ROLE"
                              ? {
                                  color: "#6B7280",
                                  width: "100px",
                                  p: 1,
                                  textAlign: "center",
                                }
                              : { color: "#6B7280", width: "100px", p: 1 }
                          }
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
                        {roles.map((role, index) => {
                          if (index + 1 === cellValue.role) {
                            return (
                              <TableCell
                                key={nanoid()}
                                sx={{
                                  borderBottom: "none",
                                  textAlign: "center",
                                }}
                              >
                                <Box
                                  bgcolor={grey[200]}
                                  display="inline-block"
                                  p="5px"
                                  borderRadius={2}
                                >
                                  {role}
                                </Box>
                              </TableCell>
                            );
                          }
                          return null;
                        })}
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
                              // console.log(userId);
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
            <Box marginTop={2}>
              <CustomPagination
                count={count}
                currentPage={currentPage}
                pageChangeHandler={pageChangeHandler}
              />
            </Box>
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
    content = (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <ErrorOutlineIcon sx={{ fontSize: "80px", color: "#FF2020" }} />
        <Typography variant="h4" color="#FF2020">
          {error}
        </Typography>
      </Box>
    );
  }

  return <>{content}</>;
};

export default User;
