import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 100,
    absent: 15,
  },
  {
    name: "Tue",
    present: 40,
    absent: 15,
  },
  {
    name: "Wed",
    present: 40,
    absent: 15,
  },
  {
    name: "Thu",
    present: 40,
    absent: 15,
  },
  {
    name: "Fri",
    present: 40,
    absent: 15,
  },
];

const AttendanceCount = () => {
  return (
    <div className="bg-white rounded w-3/4 h-64 p-1 m-2">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Attendance</h4>
        <img src="moreDark.png" alt="moreIcon" className="w-5" />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            ticK={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} ticK={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "5px", paddingBottom: "5px" }}
          />
          <Bar
            dataKey="present"
            fill="#8884d8"
            minPointSize={5}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          ></Bar>
          <Bar
            dataKey="absent"
            fill="#82ca9d"
            minPointSize={10}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceCount;
