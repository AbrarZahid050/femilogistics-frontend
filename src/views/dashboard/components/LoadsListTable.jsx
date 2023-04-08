import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

//styling imports:
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import classes from "../dashboard.module.css";
// import "../style.css";

//svg imports:
import divider from "../../../assets/DashboardImages/divider.svg";
import download_icon from "../../../assets/DashboardImages/download_icon.svg";
import dropdown_arrow from "../../../assets/DashboardImages/dropdown_arrow.svg";

//data import:
import { LoadsListTableData } from "../MockData";

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
      <div className={classes.loads_list_main_container}>
        <div className={classes.loads_list_text_container}>
          <h1>Loads List of</h1>
          <div className={classes.loads_list_dropdown_container}>
            <div className={classes.dropdown_main_container}>
              <div
                className={classes.dropdown_header_wrapper}
                onClick={() => setIsDropdown(!isDropdown)}
              >
                <p>Sort by:All</p>
                <img
                  src={dropdown_arrow}
                  alt="error"
                  className={
                    isDropdown ? classes.dropdown_arrow_reverse : undefined
                  }
                />
              </div>
              {isDropdown ? (
                <div className={classes.dropdown_list_container}>
                  {dropdownList.map((e) => (
                    <div className={classes.dropdown_list_text} key={nanoid()}>
                      <input type="checkbox" />
                      <p>{e}</p>
                    </div>
                  ))}
                </div>
              ) : undefined}
            </div>
            <div className={classes.loads_list_download_container}>
              <img src={download_icon} alt="" />
            </div>
          </div>
        </div>
        <TableContainer className={classes.loads_list_table_container}>
          <Table className={classes.loads_list_table_wrapper}>
            <TableHead>
              <TableRow style={{ background: "#F9FAFB" }}>
                {LoadsListTableHeaderData.map((e) => (
                  <TableCell align="left" key={nanoid()}>
                    <p className={classes.loads_list_table_header_text}>{e}</p>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {LoadsListTableData.map((e) => (
                <TableRow key={nanoid()}>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.Load}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <div className={classes.list_dropdown_header_wrapper}>
                      <p
                        className={
                          e.Status === "Cancelled"
                            ? classes.list_dropdown_text_cancelled
                            : classes.list_dropdown_text_delivered
                        }
                      >
                        {e.Status}
                      </p>
                      <img src={dropdown_arrow} alt="error" />
                    </div>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.customer}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.origin}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.LatestNote}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.destination}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.Pickuptime}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.pickup}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.dropofftime}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.carrier}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.equip}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.commodity}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.mileage}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.owner}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.owner1}</p>
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.loads_list_table_data_text}
                  >
                    <p>{e.owner2}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <img src={divider} alt="" className="divider-image" />
        </div>
        <div className={classes.result_container}>
          <p>Showing 1 to 10 of 97 results</p>
          <div className={classes.paginator_container}>
            <div
              className={classes.paginator}
              style={{ borderRadius: "6px 0px 0px 6px" }}
            >
              <p>{"<"}</p>
            </div>
            <div className={classes.paginator}>
              <p>1</p>
            </div>
            <div className={classes.paginator}>
              <p>2</p>
            </div>
            <div className={classes.paginator}>
              <p>3</p>
            </div>
            <div className={classes.paginator}>
              <p>...</p>
            </div>
            <div className={classes.paginator}>
              <p>8</p>
            </div>
            <div className={classes.paginator}>
              <p>9</p>
            </div>
            <div className={classes.paginator}>
              <p>10</p>
            </div>
            <div
              className={classes.paginator}
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
