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
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate();
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
                  pathname: "/panel",
                  search: "/customer/newcustomer",
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
                      key={nanoid()}
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
                {Array(1, 2).map(() => (
                  <TableRow
                    key={nanoid()}
                    sx={{ "&:hover": { background: "rgba(0, 98, 255, 0.03)" } }}
                  >
                    {[
                      "994",
                      "Complete",
                      "A0B1C010",
                      "Pacome Anjorin",
                      "1921 General Passage Seattle, WA 98185",
                      "Whitehorse",
                      "RI",
                      "48144",
                      " $1,078.00",
                      " $6,072.00",
                    ].map((cellVal, index) => (
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
                    ))}
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
