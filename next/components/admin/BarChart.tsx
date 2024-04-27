/** @format */
"use client";
import React from "react";
// import {
//   BarChart as BarGraph,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Bar
// } from "recharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
type Props = {};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function BarChart({}: Props) {
  return (
    <div className="h-64 md:h-80 h-96 ">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="w-full"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
// <ResponsiveContainer width={"100%"} height={350}>
//   <BarGraph data={data}>
//     <XAxis
//       dataKey={"name"}
//       tickLine={false}
//       axisLine={false}
//       stroke="#888888"
//       fontSize={12}
//     />
//     <YAxis
//       tickLine={false}
//       axisLine={false}
//       stroke="#888888"
//       fontSize={12}
//       tickFormatter={(value) => `$${value}`}
//     />
//     <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
//   </BarGraph>
// </ResponsiveContainer>
