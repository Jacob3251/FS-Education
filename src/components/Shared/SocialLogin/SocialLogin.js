import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="w-[80%] flex mx-auto items-center">
      <div className="w-[50%] bg-black" style={{ height: "1px" }}></div>
      <p className="bg-white p-2">Or</p>
      <div className="w-[50%] bg-black" style={{ height: "1px" }}></div>
    </div>
  );
};

export default SocialLogin;
