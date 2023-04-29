// chart imports
import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
//styling imports
import classes from "../dashboard.module.css";
//svg imports:
import arrow_left from "../../../assets/DashboardImages/arrow_left.svg";
import arrow_right from "../../../assets/DashboardImages/arrow_right.svg";
import blue from "../../../assets/DashboardImages/blue.svg";
import green from "../../../assets/DashboardImages/green.svg";
import orange from "../../../assets/DashboardImages/orange.svg";
import yellow from "../../../assets/DashboardImages/yellow.svg";

const LoadsTransfer = () => {
  ChartJS.register(ArcElement, Tooltip);
  const data = {
    labels: [],
    datasets: [
      {
        label: " Value: ",
        data: [26, 5, 10, 10],
        backgroundColor: ["#FFC542", "#FF974A", "#3DD598", "#0062FF"],
        spacing: -10,
        borderRadius: 10,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: 92.5,
    hover: false,
    aspectRatio: 1,
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className={classes.main_loads_transfer_container}>
      <div className={classes.month_wrapper}>
        <img src={arrow_left} alt="error" />
        <h2>January</h2>
        <img src={arrow_right} alt="error" />
      </div>
      <div className={classes.doughnut_container}>
        <Doughnut data={data} options={options} width={200} height={200} />
        <div className={classes.doughnut_container_text}>
          <h1>229 lbs</h1>
          <p>Loads Trasnfered</p>
        </div>
      </div>
      <div className={classes.loads_ratio_first_container}>
        <div className={classes.loads_ratio_second_container}>
          <div className={classes.loads_ratio_wrapper}>
            <div className={classes.dashboard_text_first_container}>
              <img src={blue} alt="error" />
              <p>In Transit</p>
            </div>
            <span>2.1k</span>
          </div>
          <div className={classes.loads_ratio_wrapper}>
            <div className={classes.dashboard_text_first_container}>
              <img src={orange} alt="error" /> <p>Upcoming</p>
            </div>
            <span>1k</span>
          </div>
        </div>

        <div className={classes.loads_ratio_second_container}>
          <div className={classes.loads_ratio_wrapper}>
            <div className={classes.dashboard_text_first_container}>
              <img src={green} alt="error" /> <p>Delivered</p>
            </div>
            <span>1.9k</span>
          </div>
          <div className={classes.loads_ratio_wrapper}>
            <div className={classes.dashboard_text_first_container}>
              <img src={yellow} alt="error" /> <p>LoadsAvailable</p>
            </div>
            <span>15.7k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadsTransfer;
