import { nanoid } from "@reduxjs/toolkit";

//styling imports:
import { Grid } from "@mui/material";
import classes from "./dashboard.module.css";
// import "./style.css";

//svg imports:
import line_arrow from "../../assets/DashboardImages/line_arrow.svg";
import Navbar from "../navbar/Navbar";
import SideDrawer from "../sideDrawer/SideDrawer";
import Graph from "./components/Graph";
import LoadsListTable from "./components/LoadsListTable";
import LoadsTransfer from "./components/LoadsTransfer";

//data imports:
import { loadsActivity } from "./MockData";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideDrawer />
        <div className={classes.right_main_container}>
          <Grid container style={{ padding: "24px 10px" }} spacing={2}>
            <Grid item md={8} lg={9}>
              <Graph />
            </Grid>
            <Grid item md={4} lg={3}>
              <LoadsTransfer />
            </Grid>
          </Grid>

          <Grid container style={{ padding: "6px 12px" }} spacing={2}>
            {loadsActivity.map((e) => (
              <Grid item md={4} lg={2.4} key={nanoid()}>
                <div className={classes.loads_main_wrapper}>
                  <h2>{e.loadsText}</h2>
                  <div className={classes.loads_main_container}>
                    <h1>{e.ratio}</h1>
                    <div className={classes.loads_text_container}>
                      <span>{e.percentage}</span>
                      <img src={line_arrow} alt="" />
                    </div>
                  </div>
                  <span className={classes.comparison_text}>
                    Compared to ({e.comparedTo} last month)
                  </span>
                </div>
              </Grid>
            ))}
          </Grid>

          <LoadsListTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
