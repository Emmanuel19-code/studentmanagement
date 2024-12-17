import React from "react";
import StudentCount from "../components/StudentCount";
import AttendanceCount from "../components/AttendanceCount";
import FinanceChart from "../components/FinanceChart";
import EventCalendar from "../components/EventCalendar";
import Announcement from "../components/Announcement";

const AdminDashboard = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between p-2">
        <div>
          <div className="bg-slate-50 flex flex-row items-center border rounded-3xl w-56 p-1">
            <img src="search.png" alt="" className="w-4 h-4 mr-1" />
            <input
              type="text"
              placeholder="search"
              className="outline-none bg-slate-50"
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="ml-1 mr-4">
            <img src="message.png" alt="" className="w-5 h-5" />
          </div>

          <div className="mr-4">
            <img src="announcement.png" alt="" className="w-5 h-5" />
          </div>

          <div className="mr-3">
            <h4 className="text-xs font-medium">Emmanuel Adane</h4>
            <p className="text-xs text-end">Student</p>
          </div>
          <img
            src="avatar.png"
            alt="profile"
            className="w-10 rounded-full h-10"
          />
        </div>
      </div>
      <div className="p-2 flex-row flex">
        <div>
          <div className="flex flex-row items-center">
            <div className="bg-violet-100 rounded-xl h-28 md:w-48 2xl:w-64 m-1 p-1">
              <div></div>
            </div>
            <div className="bg-yellow-200 rounded-xl h-28 md:w-48 2xl:w-64 m-1 p-1">
              <div></div>
            </div>
            <div className="bg-violet-100 rounded-xl h-28 md:w-48 2xl:w-64 m-1 p-1">
              <div></div>
            </div>
            <div className="bg-yellow-200 rounded-xl h-28 md:w-48 2xl:w-64 m-1 p-1">
              <div></div>
            </div>
          </div>
          <div className="flex flex-row  ">
            <StudentCount />
            <AttendanceCount />
          </div>
          <div className="">
            <FinanceChart />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-white h-96 p-1 rounded">
            <EventCalendar />
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Events</h4>
              <img src="moreDark.png" alt="moreIcon" className="w-5" />
            </div>
          </div>
          <div className="bg-white mt-2 p-">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Events</h4>
              <img src="moreDark.png" alt="moreIcon" className="w-5" />
            </div>
            <Announcement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
