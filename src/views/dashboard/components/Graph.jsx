import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

//chart library:
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

//styling imports:
import "../style.css";

//data imports:
import { dataRaw } from "../MockData";

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
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4D7CFE" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Tooltip itemStyle={{ backgroundColor: "white" }} />

            <XAxis dataKey="name" axisLine={false} />
            <YAxis axisLine={false} />
            <CartesianGrid
              strokeDasharray="0 0"
              horizontal={false}
              axisLine={true}
              width={100}
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="none"
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
