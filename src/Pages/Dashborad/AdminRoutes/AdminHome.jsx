import React from "react";
import UseAuth from "../../Hooks/UseAuth";

const AdminHome = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h2 className="text-center text-5xl">
        Welcome{" "}
        <span className="text-blue-200 font-bold "> {user?.displayName}</span> to our website
      </h2>
    </div>
  );
};

export default AdminHome;
