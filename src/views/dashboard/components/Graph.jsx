import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

//chart library:
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

//styling imports:
import "../style.css";

//data imports:
import { dataRaw } from "../MockData";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="graph-tooltip">
        <h4>${`${payload[0].payload.amt}`}</h4>
        <p>{label}</p>
        <span className="triangle"></span>
        <span className="square"></span>
        <span className="active-line"></span>
      </div>
    );
  }
  return null;
};

const LoadsGraph = () => {
  const [tabId, setTabId] = useState("Monthly");
  const tabs = ["Weekly", "Monthly", "Yearly"];

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
        <ResponsiveContainer>
          <AreaChart
            data={dataRaw}
            margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4D7CFE" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding={{ left: 30 }}
            />
            <YAxis axisLine={false} tickLine={false} />
            <CartesianGrid
              strokeDasharray="0 0"
              horizontal={false}
              axisLine={true}
              width={100}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              stroke="none"
              dataKey="uv"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default LoadsGraph;
