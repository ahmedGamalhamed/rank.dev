/** @format */
'use client';
import { getVisitorsCount } from '@/app/actions/userActions';
import React, { useEffect, useState } from 'react';
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
} from 'recharts';
type Props = {};

const data = [
  {
    name: 'Page A',
    uv: 4000,
  },
  {
    name: 'Page B',
    uv: 3000,
  },
  {
    name: 'Page C',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
];

const ddmmTommdd = (date: string) => {
  let arr: string[] = date.split('/') || [];
  [arr[0], arr[1]] = [arr[1], arr[0]];
  return arr.join('/');
};

export default function BarChart({}: Props) {
  const [data, setData] = useState<{ name: string; uv: number }[]>([]);

  useEffect(() => {
    getVisitorsCount().then((data) => {
      let chartData = data.map((obj) => ({ name: obj.date, uv: obj.count }));
      chartData = chartData.sort((a, b) => {
        return (
          new Date(ddmmTommdd(a.name)).getTime() -
          new Date(ddmmTommdd(b.name)).getTime()
        );
      });
      setData(chartData);
    });
  }, []);
  return (
    <div className="h-64 md:h-80 h-96 ">
      <ResponsiveContainer width={'100%'} height={'100%'}>
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
