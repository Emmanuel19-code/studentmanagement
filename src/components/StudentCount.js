import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 160,

    fill: "white",
  },
  {
    name: "Boys",
    count: 100,

    fill: "#cffafe",
  },

  {
    name: "Girls",
    count: 60,

    fill: "#fef08a",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const StudentCount = () => {
  return (
    <div className="bg-white w-2/5 h-64 rounded m-2 p-1">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Students</h4>
        <img src="moreDark.png" alt="moreIcon" className="w-5" />
      </div>
      <div className="w-full relative h-[60%] flex justify-center items-center">
  <ResponsiveContainer>
    <RadialBarChart
      cx="50%"
      cy="50%"
      innerRadius="30%"
      outerRadius="100%"
      barSize={10}
      data={data}
    >
      <RadialBar minAngle={15} background clockWise dataKey="count" />
    </RadialBarChart>
  </ResponsiveContainer>
  <img
    src="maleFemale.png"
    alt=""
    className="absolute w-8 h-8 bottom-10 left-1/2 transform -translate-x-1/2 top-14"
  />
</div>

      <div className="flex flex-row justify-around">
        <div>
          <div className="w-4 h-4 rounded-full bg-cyan-100"></div>
          <h4 className="text-xs font-bold">1,234</h4>
          <p className="text-xs text-slate-300">
            Boys<span>(25%)</span>
          </p>
        </div>
        <div>
          <div className="w-4 h-4 rounded-full bg-yellow-200"></div>
          <h4 className="text-xs font-bold">1,234</h4>
          <p className="text-xs text-slate-300">
            Girls<span>(25%)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCount;
