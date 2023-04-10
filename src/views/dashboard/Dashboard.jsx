import { Grid } from "@mui/material";
import React from "react";
import Graph from "./components/Graph";
import LoadRatios from "./components/LoadRatios";
import LoadsListTable from "./components/LoadsListTable";
import LoadsTransfer from "./components/LoadsTransfer";

//styling imports:
import classes from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={classes.right_main_container}>
        <Grid container style={{ padding: "24px 10px" }} spacing={2}>
          <Grid item md={8} lg={8.7}>
            <Graph />
          </Grid>
          <Grid item md={4} lg={3.3}>
            <LoadsTransfer />
          </Grid>
        </Grid>
        <Grid container style={{ padding: "6px 12px" }} spacing={2}>
          <LoadRatios />
        </Grid>
        <LoadsListTable />
      </div>
    </>
  );
};

export default Dashboard;
