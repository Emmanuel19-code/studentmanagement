import React from "react";
import BigCalendar from "../components/BigCalendar";

const StudentDashboard = () => {
  return (
    <div>
      <div className="flex flex-row justify-between p-2">
        <div>
          <div className="bg-slate-50 flex flex-row items-center border rounded-3xl w-56 p-1">
            <img src="/search.png" alt="" className="w-4 h-4 mr-1" />
            <input
              type="text"
              placeholder="search"
              className="outline-none bg-slate-50"
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="ml-1 mr-4">
            <img src="/message.png" alt="" className="w-5 h-5" />
          </div>

          <div className="mr-4">
            <img src="/announcement.png" alt="" className="w-5 h-5" />
          </div>

          <div className="mr-3">
            <h4 className="text-xs font-medium">Emmanuel Adane</h4>
            <p className="text-xs text-end">Student</p>
          </div>
          <img
            src="/avatar.png"
            alt="profile"
            className="w-10 rounded-full h-10"
          />
        </div>
      </div>
      <div className="p-2">
        <div className="bg-white p-2 h-full ">
          <h4 className="font-bold text-md">Schedule (A)</h4>
          <BigCalendar/>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
