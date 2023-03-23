//styling imports:
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import "../style.css";

//svg imports:
import arrow_left from "../../../assets/DashboardImages/arrow_left.svg";
import arrow_right from "../../../assets/DashboardImages/arrow_right.svg";
import blue from "../../../assets/DashboardImages/blue.svg";
import green from "../../../assets/DashboardImages/green.svg";
import orange from "../../../assets/DashboardImages/orange.svg";
import yellow from "../../../assets/DashboardImages/yellow.svg";

ChartJS.register(ArcElement, Tooltip);

const LoadsTransfer = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: " Value: ",
        data: [21, 19, 3],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  };

  const options = {
    cutout: 84,
    aspectRatio: 1,
    responsive: true,
  };

  return (
    <div className="main-loads-transfer-container">
      <div className="month-wrapper">
        <img src={arrow_left} alt="error" />
        <h2>January</h2>
        <img src={arrow_right} alt="error" />
      </div>
      <div className="doughnut-container">
        <Doughnut data={data} options={options} width={200} height={200} />
        <div className="doughnut-container-text">
          <h1>229 lbs</h1>
          <p>Loads Trasnfered</p>
        </div>
      </div>
      <div className="loads-ratio-first-container">
        <div className="loads-ratio-second-container">
          <div className="loads-ratio-wrapper">
            <div className="dashboard-text-first-container">
              <img src={blue} alt="error" />
              <p>In Transit</p>
            </div>
            <span>2.1k</span>
          </div>
          <div className="loads-ratio-wrapper">
            <div className="dashboard-text-first-container">
              <img src={orange} alt="error" /> <p>Upcoming</p>
            </div>
            <span>1k</span>
          </div>
        </div>

        <div className="loads-ratio-second-container">
          <div className="loads-ratio-wrapper">
            <div className="dashboard-text-first-container">
              <img src={green} alt="error" /> <p>Delivered</p>
            </div>
            <span>1.9k</span>
          </div>
          <div className="loads-ratio-wrapper">
            <div className="dashboard-text-first-container">
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
