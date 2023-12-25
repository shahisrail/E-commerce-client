import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Navbar/Nav";
import Fotter from "../Pages/Shared/Fotter/Fotter";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
     <div className="max-w-7xl mx-auto">
     <Outlet></Outlet>
      <Fotter></Fotter>
     </div>
    </div>
  );
};

export default Main;
