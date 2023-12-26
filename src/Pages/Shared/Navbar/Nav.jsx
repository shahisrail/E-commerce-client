import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/Provider";
import Swal from "sweetalert2";
import UseAdmin from "../../Hooks/UseAdmin";
import UseSaller from "../../Hooks/UseSaller";
import UseAuth from "../../Hooks/UseAuth";

const Nav = () => {
  const [isAdmin] = UseAdmin();
  const [isSaller] = UseSaller();
  const { user, signout } = useContext(AuthContext);

  // console.log(isAdmin);
  const navLinks = (
    <>
      <li className="bg-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/aboutpage">About</NavLink>
      </li>
      {isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">Admin Dashboard</NavLink>
        </li>
      )}
      {isSaller && (
        <li>
          <NavLink to="/dashboard/sallerHome">Saller Dashboard</NavLink>
        </li>
      )}
      {/* User Dashboard */}
      {!isAdmin && !isSaller && user &&(
        <li>
          <NavLink to="/dashboard/userHome">User Dashboard</NavLink>
        </li>
      )}

      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink className="lg:hidden" to="/dashboard/profile">
          profile
        </NavLink>
      </li>
    </>
  );

 
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
  const userimg =
    user && user.photoURL ? user.photoURL : "https://i.imgur.com/6yCMVKZ.jpg";

  const useName = user && user.displayName;
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="navbar fixed-navbar   bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          {/* <img
          className="w-[80px] md:w-[200px] lg:w-[250px]"
          src="https://i.imgur.com/Z5misJF.png"
          alt=""
        /> */}
          <h2 className=" md:text-3xl">E-commerce</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <h1 className="hidden md:block"> {useName} </h1>
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar hidden md:block"
          >
            <div className=" rounded-full ">
              <img src={userimg} alt="" />
            </div>
          </label>
          {user ? (
            <>
              <button
                onClick={handelSignout}
                className="btn btn-grad w-[120px] md:w-[170px] bg-[#62C8BA] font-bold hover:bg-[#0E204D] text-white"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn text-white font-bold bg-[#62C8BA] hover:bg-[#0E204D]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Nav;
