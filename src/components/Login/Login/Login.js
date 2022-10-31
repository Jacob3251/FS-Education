import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/Fs.png";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  return (
    <div className="w-[50%] mx-auto  my-10 ">
      <div className=" h-[150px] w-[170px] mx-auto">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <form className="login-form w-full">
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="login-input"
          required
        />
        <button className=" mx-auto w-[80%] block info-btn hover:scale-90 duration-150 text-white font-medium hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600">
          Forget Password
        </button>
        <input
          type="submit"
          value="Submit"
          className="mt-2 mx-auto w-[80%] block info-btn hover:scale-90 duration-150 text-white font-medium hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600"
        />
      </form>
      <p className="text-center text-gray-500 text-md my-5">
        Don't have an account?{"   "}
        <span className="login-toggle hover:underline hover:scale-105 inline-block duration-100">
          <Link to="/register">Create an Account</Link>
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
