import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 border-slate-400">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border
          border-slate-500 border-r-0 px-3 py-2 rounded-l hover:bg-slate-300"
          to="/add"
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="" />
          <p className="hidden md:block text-gray-500">Add Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border  border-slate-500 border-r-0 px-3 py-2 rounded-l hover:bg-slate-300"
          to="/list"
        >
          <img className="w-5 h-5" src={assets.parcel_icon} alt="" />
          <p className="hidden md:block text-gray-500">List Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-slate-500 border-r-0 px-3 py-2 rounded-l hover:bg-slate-300"
          to="/orders"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block text-gray-500">Order Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
