import React from "react";
import { Outlet } from "react-router-dom";
import { menuItems } from "./data/Menu";

const Layout = () => {
  return (
    <div className="flex flex-row h-full 2xl:h-screen bg-slate-50">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-2 bg-white">
        <div className="flex flex-row items-center">
          <img src="/learningSchool.png" alt="" />
          <h4 className="font-medium hidden md:flex">EduManage</h4>
        </div>
        <h4 className="text-gray-400 mt-4 text-sm">MENU</h4>
        <div>
          {menuItems.map((menu, index) => (
            <div key={index}>
              {menu.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex cursor-pointer flex-row mt-3 ml-2 items-center">
                  <img src={item.icon} alt={item.label || "Menu item icon"} className="w-4 h-4"/>
                  <h4 className="ml-2 hidden md:flex text-sm text-slate-600 ">{item.label || "No label available"}</h4>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[86%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
