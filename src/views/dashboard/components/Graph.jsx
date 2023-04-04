import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
//chart library:
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

//styling imports:
import "../style.css";

//data imports:
import { dataRaw, labels } from "../MockData";

// image import
import tooltip_pointer from "../../../assets/DashboardImages/tooltip_pointer.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LoadsGraph = () => {
  const [tabId, setTabId] = useState("Monthly");
  const tabs = ["Weekly", "Monthly", "Yearly"];

  const getPointStyle = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 30;
    canvas.height = 30;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = tooltip_pointer;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    return canvas;
  };

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataRaw,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(1, "rgba(255,255,255, 0.9)");
          gradient.addColorStop(0, "rgba(201,215,255, 1)");
          return gradient;
        },
        borderColor: "rgba(255,255,255,1)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    hover: {
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (tooltipItem) => {
            return `  $${tooltipItem[0].raw}`;
          },
          label: (context) => {
            return `   ${context.label}                      `;
          },
        },
        displayColors: false,
        backgroundColor: "#0062FF",
        cornerRadius: 20,
        titleAlign: "left",
        bodyAlign: "left",
        padding: 10,
        yAlign: "bottom",
        caretPadding: 8,
        caretSize: 10,
        titleColor: "#FFFFFF",
        bodyColor: "#FAFAFA",
        bodyFont: {
          size: 14,
        },
        titleFont: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          padding: 20,
        },
        grid: {
          tickColor: "white",
          color: "#F1F1F5",
        },
        border: {
          color: "white",
        },
      },
      y: {
        border: {
          color: "#F1F1F5",
        },
        grid: {
          display: false,
        },
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 200,
          padding: 20,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
        stepped: false,
      },
      point: {
        pointStyle: getPointStyle,
        radius: 0,
        hoverRadius: 10,
      },
    },
  };
  return (
    <>
      <div className="graph-container">
        <div className="graph-text-container">
          <p>Loads Delivered</p>
          <div className="tabs-container">
            {tabs.map((e) => (
              <div
                key={nanoid()}
                className={tabId === e ? "tab-text-active" : "tab-text"}
                onClick={() => setTabId(e)}
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className="line-chart-container">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default LoadsGraph;
