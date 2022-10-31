import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className=" flex items-center">
        <div className="w-[50%] bg-black" style={{ height: "1px" }}></div>
        <p className="bg-white p-2">Or</p>
        <div className="w-[50%] bg-black" style={{ height: "1px" }}></div>
      </div>
      <div className="flex justify-evenly">
        <button className="w-[50px] sm:w-[70px] md:w-[150px]  px-4 h-[40px] flex items-center md:mx-3 lg:mx-2  info-btn hover:scale-90 duration-150 text-white hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600">
          <FaGoogle />
          <span className="pl-3 text-[12px] hidden md:inline-block">
            Google Sign In
          </span>
        </button>
        <button className="w-[50px] sm:w-[70px] md:w-[150px]  px-4 h-[40px] flex items-center md:mx-3 lg:mx-2  info-btn hover:scale-90 duration-150 text-white hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600">
          <FaFacebook />
          <span className="pl-3 text-[12px] hidden md:inline-block">
            Facebook Login
          </span>
        </button>
        <button className="w-[50px] sm:w-[70px] md:w-[150px]  px-4 h-[40px] flex items-center md:mx-3 lg:mx-2  info-btn hover:scale-90 duration-150 text-white hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600">
          <FaGithub />
          <span className="pl-3 text-[12px] hidden md:inline-block">
            Github Login
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
