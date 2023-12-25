import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/Provider";

const Login = () => {
  const { signin, signinWithGoogle, signinWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signin(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
        });
        navigate(location?.state ? location.state : "/dashboard/maketodo");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Sign-in Successful",
        });
        navigate(location?.state ? location.state : "/dashboard");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-in Failed",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  const handleGithubLogin = () => {
    signinWithGithub()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "GIthub Sign-in Successful",
        });
        navigate(location?.state ? location.state : "/dashboard");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Github Sign-in Failed",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <div
      className=" md:w-1/2 mt-5 p-3 mx-auto shadow-lg rounded-3xl"
    >
      <div>
        <h2 className=" md:text-3xl text-center">Welcome to E-commerce! Please login.</h2>

        <div>
          <div>
            <form onSubmit={handleLogin} className="md:w-3/4 mx-auto lg:w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="  flex flex-col md:flex-row justify-center md:gap-5">
          <button
            onClick={handleGoogleLogin}
            className=" rounded-full h-[100px]"
          >
            <button className="btn font-medium w-[180px] ">
              Login with <FaGoogle></FaGoogle>{" "}
            </button>
          </button>
          <button
            onClick={handleGithubLogin}
            className="  rounded-full h-[100px]"
          >
            <button className="btn font-medium w-[180px] ">
              Login with <FaGithub></FaGithub>
            </button>
          </button>
        </div>
        <div className="form-control mt-6"></div>
        <p className="text-center mt-5">
          Dont have an account?
          <Link className="text-blue-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
