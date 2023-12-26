import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Pages/Hooks/UseAdmin";
import UseSaller from "../Pages/Hooks/UseSaller";
import { CgProfile } from "react-icons/cg";
import UseAuth from "../Pages/Hooks/UseAuth";
import { TbLogout } from "react-icons/tb";
import Swal from "sweetalert2";

const Dashbord = () => {
  const [isAdmin] = UseAdmin();
  const [isSaller] = UseSaller();
  const {signout,user} = UseAuth()
  const handelSignout = () => {
    signout()
      .then(() => {
        // logut was successful
        Swal.fire({
          icon: "success",
          title: "wow great your logout",
        });
      })
      .catch((error) => {
        // An error occurred during logout
        Swal.fire({
          icon: "error",
          title: "oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-64 min-h-screen bg-[#FCF3DD]">
        <ul className="menu">
          {isAdmin && (
            <>
              <h2 className="text-3xl text-center">
                Admin <br />
                <span className="text-[20px]">D a s h b o a r d</span>
              </h2>
              <li className="flex  items-center p-3 gap-2 mt-10">
                <NavLink to="/dashboard/adminHome">
                  Admin Home<FaHome></FaHome>
                </NavLink>
              </li>
              <li className="flex  items-center gap-2 ">
                <NavLink to="/dashboard/allUsers">
                  All Users <FaUser></FaUser>
                </NavLink>
              </li>
            </>
          )}
          {isSaller && (
            <>
              <h2 className="text-3xl text-center">
                Saller <br />
                <span className="text-[20px]">D a s h b o a r d</span>
              </h2>
              <li className="flex items-center gap-2 mt-10 p-3">
                <NavLink to="/dashboard/sallerHome">
                  Saller Home <FaUser></FaUser>
                </NavLink>
              </li>
            </>
          )}
          {!isAdmin && !isSaller && user && (
            <>
              <h2 className="text-3xl text-center">
                User <br />
                <span className="text-[20px]">D a s h b o a r d</span>
              </h2>
              <li className="flex items-center gap-2 mt-10 p-3">
                <NavLink to="/dashboard/userHome">
                  User Home <FaUser></FaUser>
                </NavLink>
              </li>
            </>
          )}
          
          <div className="divider"></div>

          {/* shared navlinks */}
          <li className="flex items-center gap-2 ">
            <NavLink to="/">
              Home<FaHome></FaHome>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="flex items-center gap-2 ">
            <NavLink to="/dashboard/profile">
              Profile <CgProfile />
            </NavLink>
          </li>
          <li className="flex items-center gap-2 ">
            <NavLink onClick={handelSignout} to="/">
              logout <TbLogout />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-[#FFFDFA]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
