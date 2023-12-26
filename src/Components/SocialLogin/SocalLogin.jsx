/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import UseAuth from "../../Pages/Hooks/UseAuth";
import UseAxiosPublic from "../../Pages/Hooks/UseAxiosPublic";

const SocalLogin = () => {
  const { signinWithGoogle, signinWithGithub } = UseAuth();
  const navigate = useNavigate();
  const locatoin = useLocation();
  const axiosPublic = UseAxiosPublic();

  const from = locatoin.state?.from?.pathname || "/";

  const handelGoogleSignIn = () => {
    signinWithGoogle().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        role:'user'
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });
      Swal.fire({
        title: "Login Succsess full",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  const HandelGithub = () => {
    signinWithGithub().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        role:'user'
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });
      Swal.fire({
        title: "Login Succsess full",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="  flex flex-col md:flex-row justify-center md:gap-5">
      <button onClick={handelGoogleSignIn} className=" rounded-full h-[100px]">
        <button className="btn font-medium w-[180px] ">
          Login with <FaGoogle></FaGoogle>{" "}
        </button>
      </button>
      <button onClick={HandelGithub} className="  rounded-full h-[100px]">
        <button className="btn font-medium w-[180px] ">
          Login with <FaGithub></FaGithub>
        </button>
      </button>
    </div>
  );
};

export default SocalLogin;
