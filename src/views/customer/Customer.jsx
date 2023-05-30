import { useEffect, useState } from "react";

import SortBy from "../common/SortElement/SortBy";

//mui style imports:
import {
  Box,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableBody,
  Pagination,
} from "@mui/material";

import { NavbarBtn } from "../../components/Styles/StyledBtns";
import { ReactComponent as Plus } from "../../assets/Users/plus.svg";

import { useNavigate } from "react-router-dom";

//redux imports:
import {
  allCustomers,
  customerCount,
  fetchCustomers,
  setCustomerById,
} from "../../redux/slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerById } from "../../redux/slices/customerSlice";

const Customer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //state below constains all the customers:
  const customers = useSelector(allCustomers);

  //pagination states:
  const count = useSelector(customerCount);
  const [currentPage, setPage] = useState(1);
  const limit = 10;

  //handler to change the page, this is passed as a props to CustomPagination.
  const pageChangeHandler = (event, pageNumber) => {
    dispatch(fetchCustomers(limit * (pageNumber - 1)));
    setPage(pageNumber);
  };

  useEffect(() => {
    if (customers) {
      dispatch(fetchCustomers(limit * (currentPage - 1)));
    }
  }, [dispatch]);

  //function to decode if the user clicked btn for use cusotmer or an existing one:
  const handleClick = async (event) => {
    const customerId = event.target.id;
    if (customerId) {
      try {
        const responseFromApi = await dispatch(
          fetchCustomerById(customerId)
        ).unwrap();
        dispatch(setCustomerById(responseFromApi.data));
        navigate({ pathname: `editcustomer/${customerId}` });
      } catch (errorFromApi) {
        console.log(errorFromApi);
      }
    }
  };

  return (
    <Box width="100%" p={2}>
      <Stack spacing={2}>
        {/* Heading + sortBar & plusBtn */}
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <Typography variant="h6" fontSize="20px">
            Customer List
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <SortBy />
            <NavbarBtn
              sx={{ background: "#FFFFFF", borderRadius: "10px" }}
              onClick={() => {
                navigate({
                  pathname: "/panel/customer/newcustomer",
                });
              }}
            >
              <Plus />
            </NavbarBtn>
          </Box>
        </Stack>

        {/* Table container */}
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
                <TableRow>
                  {[
                    "ID",
                    "STATUS",
                    "IDENTIFIER",
                    "NAME",
                    "ADDRESS",
                    "CITY",
                    "STATE",
                    "ZIP",
                    "CREDIT LIMIT",
                    "AVAILABLE CREDIT",
                  ].map((cellValue) => (
                    <TableCell
                      key={cellValue}
                      sx={
                        cellValue === "ID"
                          ? {
                              color: "#6B7280",
                              p: 2,
                              textAlign: "center",
                            }
                          : {
                              color: "#6B7280",
                              p: 2,
                            }
                      }
                    >
                      {cellValue}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow
                    key={customer.id}
                    sx={{ "&:hover": { background: "rgba(0, 98, 255, 0.03)" } }}
                  >
                    <TableCell
                      id={customer.id}
                      onClick={handleClick}
                      sx={{
                        p: 2,
                        textAlign: "center",
                        color: "#0062FF",
                        borderBottom: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {customer.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 2,
                        borderBottom: "none",
                      }}
                    >
                      {customer.status}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 2,
                        borderBottom: "none",
                      }}
                    >
                      {customer.identifier}
                    </TableCell>
                    <TableCell
                      id={customer.id}
                      onClick={handleClick}
                      sx={{
                        p: 2,
                        color: "#0062FF",
                        borderBottom: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {customer.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 2,
                        borderBottom: "none",
                      }}
                    >
                      {customer.billing_address.address_1}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 2,
                        borderBottom: "none",
                      }}
                    >
                      {customer.billing_address.city}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 2,
                        borderBottom: "none",
                      }}
                    >
                      {customer.billing_address.state}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 2,
                        borderBottom: "none",
                      }}
                    >
                      {customer.billing_address.postal_code}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 2,
                        borderBottom: "none",
                      }}
                    >
                      $ {customer.credit_limit}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 2,
                        borderBottom: "none",
                      }}
                    >
                      $ {customer.available_credit}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Pagination
            size="large"
            siblingCount={1}
            color="primary"
            count={Math.ceil(count / limit)}
            page={currentPage}
            onChange={pageChangeHandler}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Customer;

/* {customer.map((cellVal, index) => (
                      <TableCell
                        key={nanoid()}
                        sx={
                          index === 0
                            ? {
                                p: 1,
                                textAlign: "center",
                                color: "#0062FF",
                                borderBottom: "none",
                              }
                            : index === 3
                            ? { p: 1, color: "#0062FF", borderBottom: "none" }
                            : { p: 1, borderBottom: "none" }
                        }
                      >
                        {cellVal}
                      </TableCell>
                    ))} */
