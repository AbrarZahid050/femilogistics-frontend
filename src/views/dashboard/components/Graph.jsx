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
import classes from "../dashboard.module.css";
import "../style.css";

//data imports:
import { dataRaw } from "../MockData";

const LoadsGraph = () => {
  const [tabId, setTabId] = useState("Monthly");
  const tabs = ["Weekly", "Monthly", "Yearly"];

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const customCursorLine = {
    id: "customCursorLine",
    afterDatasetsDraw(chart) {
      const {
        ctx,
        tooltip,
        chartArea: { bottom },
        scales: { x, y },
      } = chart;

      if (
        tooltip._active.length > 0 &&
        tooltip.chart.canvas.id === "customCursorLine"
      ) {
        const xCoordinate = x.getPixelForValue(tooltip.dataPoints[0].dataIndex);
        const yCoordinate = y.getPixelForValue(tooltip.dataPoints[0].parsed.y);
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "#0062FF";
        ctx.moveTo(xCoordinate, yCoordinate);
        ctx.lineTo(xCoordinate, bottom);
        ctx.stroke();
        ctx.closePath();
      }
    },
  };

  ChartJS.register(
    customCursorLine,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

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
        caretPadding: 6.5,
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
        pointStyle: "rectRounded",
        pointHoverBackgroundColor: "#0062FF",
        pointHoverBorderColor: "#FFFFFF",
        pointHoverBorderWidth: 3,
        pointRadius: 0,
        hoverRadius: 12,
        hitRadius: 300,
      },
    },
  };

  return (
    <>
      <div className={classes.graph_container}>
        <div className={classes.graph_text_container}>
          <p>Loads Delivered</p>
          <div className={classes.tabs_container}>
            {tabs.map((e) => (
              <div
                key={nanoid()}
                className={
                  tabId === e ? classes.tab_text_active : classes.tab_text
                }
                onClick={() => setTabId(e)}
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.line_chart_container}>
          <Line
            id="customCursorLine"
            data={data}
            options={options}
            plugins={[customCursorLine]}
          />
        </div>
      </div>
    </>
  );
};

export default LoadsGraph;
