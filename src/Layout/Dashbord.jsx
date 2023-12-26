import React from "react";
import { FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-64 min-h-screen bg-[#FCF3DD]">
        <li className="flex items-center gap-2 mt-10">
          <NavLink to="/dashboard/allUsers">
          All Users<FaUser></FaUser>
          </NavLink>
        </li>
      </div>
      <div className="flex-1 bg-[#FFFDFA]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
