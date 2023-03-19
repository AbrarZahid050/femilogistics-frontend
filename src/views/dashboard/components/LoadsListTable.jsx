import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React, { useState } from "react";
import divider from "../../../assets/DashboardImages/divider.svg";
import download_icon from "../../../assets/DashboardImages/download_icon.svg";
import dropdown_arrow from "../../../assets/DashboardImages/dropdown_arrow.svg";
import { LoadsListTableData } from "../MockData";
import "../style.css";

const LoadsListTable = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownList = ["All Loads", "Cancelled", "Delivered", "In Transit"];
  const LoadsListTableHeaderData = [
    "Load",
    "Status",
    "customer",
    "origin",
    "Latest Note",
    "destination",
    "Pickup time",
    "pickup",
    "dropoff time",
    "carrier",
    "equip",
    "commodity",
    "mileage",
    "owner",
    "owner",
    "owner",
  ];
  return (
    <>
      <div className="loads-list-main-container">
        <div className="loads-list-text-container">
          <h1>Loads List of</h1>
          <div className="loads-list-dropdown-container">
            <div className="dropdown-main-container">
              <div
                className="dropdown-header-wrapper"
                onClick={() => setIsDropdown(!isDropdown)}
              >
                <p>Sort by:All</p>
                <img
                  src={dropdown_arrow}
                  alt="error"
                  className={isDropdown && "dropdown-arrow-reverse"}
                />
              </div>
              {isDropdown && (
                <div className="dropdown-list-container">
                  {dropdownList.map((e) => (
                    <div className="dropdown-list-text">
                      <input type="checkbox" />
                      <p>{e}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="loads-list-download-container">
              <img src={download_icon} alt="" />
            </div>
          </div>
        </div>
        <TableContainer className="loads-list-table-container">
          <Table className="loads-list-table-wrapper">
            <TableHead>
              <TableRow style={{ background: "#F9FAFB" }}>
                {LoadsListTableHeaderData.map((e) => (
                  <TableCell align="left">
                    <p className="loads-list-table-header-text">{e}</p>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {LoadsListTableData.map((e) => (
                <TableRow>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.Load}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <div
                      className="list-dropdown-header-wrapper"
                    >
                      <p className={e.Status == "Cancelled" ? "list-dropdown-text-cancelled":"list-dropdown-text-delivered"}>{e.Status}</p>
                      <img
                        src={dropdown_arrow}
                        alt="error"
                      />
                    </div>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.customer}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.origin}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.LatestNote}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.destination}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.Pickuptime}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.pickup}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.dropofftime}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.carrier}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.equip}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.commodity}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.mileage}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.owner}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.owner}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className="loads-list-table-data-text"
                  >
                    <p>{e.owner}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <img src={divider} alt="" className="divider-image" />
        </div>
        <div className="result-container">
          <p>Showing 1 to 10 of 97 results</p>
          <div className="paginator-container">
            <div
              className="paginator"
              style={{ borderRadius: "6px 0px 0px 6px" }}
            >
              <p>{"<"}</p>
            </div>
            <div className="paginator">
              <p>1</p>
            </div>
            <div className="paginator">
              <p>2</p>
            </div>
            <div className="paginator">
              <p>3</p>
            </div>
            <div className="paginator">
              <p>...</p>
            </div>
            <div className="paginator">
              <p>8</p>
            </div>
            <div className="paginator">
              <p>9</p>
            </div>
            <div className="paginator">
              <p>10</p>
            </div>
            <div
              className="paginator"
              style={{ borderRadius: "0px 6px 6px 0px" }}
            >
              <p>{">"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadsListTable;
