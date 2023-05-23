import { useEffect } from "react";

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
} from "@mui/material";

import SortBy from "../common/SortElement/SortBy";
import { NavbarBtn } from "../../components/Styles/StyledBtns";
import { ReactComponent as Plus } from "../../assets/Users/plus.svg";

import { useNavigate } from "react-router-dom";

//redux imports:
import { allCustomers, fetchCustomers } from "../../redux/slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerById } from "../../redux/slices/customerSlice";

const Customer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const customers = useSelector(allCustomers);

  useEffect(() => {
    dispatch(fetchCustomers(0));
  }, [dispatch]);

  const handleClick = (event) => {
    const customerId = event.target.id;
    if (customerId) {
      dispatch(getCustomerById({ id: customerId }));
      navigate({
        pathname: `/panel/customer/editcustomer/${customerId}`,
      });
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
                              p: 1,
                              textAlign: "center",
                            }
                          : {
                              color: "#6B7280",
                              p: 1,
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
                        p: 1,
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
                        p: 1,
                        borderBottom: "none",
                      }}
                    >
                      {customer.status}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 1,
                        borderBottom: "none",
                      }}
                    >
                      {customer.identifier}
                    </TableCell>
                    <TableCell
                      id={customer.id}
                      onClick={handleClick}
                      sx={{
                        p: 1,
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
                        p: 1,
                        borderBottom: "none",
                      }}
                    >
                      {customer.billing_address.address_1}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 1,
                        borderBottom: "none",
                      }}
                    >
                      {customer.billing_address.city}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 1,
                        borderBottom: "none",
                      }}
                    >
                      {customer.billing_address.state}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 1,
                        borderBottom: "none",
                      }}
                    >
                      {customer.billing_address.postal_code}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 1,
                        borderBottom: "none",
                      }}
                    >
                      {customer.credit_limit}
                    </TableCell>
                    <TableCell
                      sx={{
                        p: 1,
                        borderBottom: "none",
                      }}
                    >
                      {customer.available_credit}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
