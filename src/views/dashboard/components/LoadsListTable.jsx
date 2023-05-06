import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

//styling imports:
import classes from "../dashboard.module.css";

//svg imports:
import divider from "../../../assets/DashboardImages/divider.svg";
import download_icon from "../../../assets/DashboardImages/download_icon.svg";
import dropdown_arrow from "../../../assets/DashboardImages/dropdown_arrow.svg";

//data import:
import Paginator from "../../common/Paginator";
import { LoadsListTableData } from "../MockData";

const LoadsListTable = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownList = ["All Loads", "Cancelled", "Delivered", "In Transit"];

  // Paginator
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 7;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = LoadsListTableData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(LoadsListTableData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % LoadsListTableData.length;
    setItemOffset(newOffset);
  };
  // Paginator

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
                className={
                  !isDropdown
                    ? classes.dropdown_header_wrapper
                    : classes.dropdown_header_wrapper_open
                }
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
                      <input type="checkbox" id="myCheckbox" />
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
              {currentItems.map((e) => (
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
          <img src={divider} alt="" className={classes.divider_image} />
        </div>
        <Paginator
          itemOffset={itemOffset}
          endOffset={endOffset}
          itemsLength={LoadsListTableData?.length}
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default LoadsListTable;
