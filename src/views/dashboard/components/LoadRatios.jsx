import React from "react";

import { Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

//data imports:
import { loadsActivity } from "../MockData.js";

//styling imports:
import classes from "../dashboard.module.css";

//svg imports:
import line_arrow from "../../../assets/DashboardImages/line_arrow.svg";

const LoadRatios = () => {
  return (
    <>
      {loadsActivity.map((e) => (
        <Grid item md={4} lg={2.4} key={nanoid()}>
          <div className={classes.loads_main_wrapper}>
            <h2>{e.loadsText}</h2>
            <div className={classes.loads_main_container}>
              <h1>{e.ratio}</h1>
              <div className={classes.loads_text_container}>
                <span
                  className={
                    e.percentage.includes("-")
                      ? classes.loads_text_red
                      : classes.loads_text_green
                  }
                >
                  {e.percentage}
                </span>
                <img
                  src={line_arrow}
                  alt=""
                  className={
                    e.percentage.includes("-")
                      ? classes.loads_arrow_down
                      : classes.loads_arrow_up
                  }
                />
              </div>
            </div>
            <span className={classes.comparison_text}>
              Compared to ({e.comparedTo} last month)
            </span>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default LoadRatios;
