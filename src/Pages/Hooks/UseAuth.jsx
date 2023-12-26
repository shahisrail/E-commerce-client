/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Provider";

const UseAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default UseAuth;
