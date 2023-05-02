import {
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  FormControl,
  IconButton,
  Paper,
  Table,
  Tooltip,
} from "@mui/material";
import TableSwitch from "./TableSwitch";
import { nanoid } from "@reduxjs/toolkit";
import { ReactComponent as Bin } from "../../../../assets/New Load Page/bin.svg";

const AccordionTable = () => {
  return (
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
              "TRANSFERS",
              "NAME",
              "ADDRESS",
              "CITY/STATE/ZIP",
              "PHONE",
              "PICKUP DATE",
              "PU#",
              "LOADED",
              "APPOINTMENT",
              "BLIND",
              "ACTION",
            ].map((heading) => (
              <TableCell sx={{ color: "#6B7280" }} key={nanoid()}>
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ p: 0 }}>
            <TableCell sx={{ color: "#D97706" }}>Pick Up</TableCell>
            {[
              "Pacome Anjorin",
              "2911 Nevada Boulevard",
              "Charlotte,NC 28273",
              "+56-955-525-285",
              "04/04/2023(16:30)",
              "Procurement #",
            ].map((cellValue) => (
              <TableCell key={nanoid()}>{cellValue}</TableCell>
            ))}
            <TableCell>
              <FormControl>
                <TableSwitch />
              </FormControl>
            </TableCell>

            <TableCell>
              <FormControl>
                <TableSwitch />
              </FormControl>
            </TableCell>

            <TableCell>FALSE</TableCell>
            <TableCell>
              <Tooltip title="Delete">
                <IconButton>
                  <Bin />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: "#059669" }}>Drop Off</TableCell>
            {[
              "Pacome Anjorin",
              "2911 Nevada Boulevard",
              "Charlotte,NC 28273",
              "+56-955-525-285",
              "04/04/2023(16:30)",
              "Procurement #",
            ].map((cellValue) => (
              <TableCell key={nanoid()}>{cellValue}</TableCell>
            ))}
            <TableCell>
              <FormControl>
                <TableSwitch />
              </FormControl>
            </TableCell>

            <TableCell>
              <FormControl>
                <TableSwitch />
              </FormControl>
            </TableCell>

            <TableCell>FALSE</TableCell>
            <TableCell>
              <Tooltip title="Delete">
                <IconButton>
                  <Bin />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AccordionTable;
