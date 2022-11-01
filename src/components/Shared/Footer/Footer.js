import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer
      className="flex justify-center items-center h-[100px] bg-[#e3e3e3be] mt-5"
      style={{ boxShadow: "0px 0px 18px #d3d3d3" }}
    >
      <div className="block space-y-5 justify-between  md:space-y-0 md:flex w-[85%] mx-auto h-full items-center  ">
        <div className="pt-5 md:pt-0  md:w-[85%] flex justify-center md:block ">
          <h1 className="text-[15px]">
            Copyright @{year} Free Square Education. Developed by{" "}
            <a
              className="font-bold font-serif text-blue-500 hover:text-blue-800"
              href="https://github.com/Jacob3251"
              target="_blank"
            >
              Jacob Frye
            </a>
          </h1>
        </div>
        <div className="flex justify-evenly mx-auto w-[40%]  md:w-[15%]">
          <a href="https://web.facebook.com/nayeem.hasan.982/" target="_blank">
            <FaFacebook className="w-[25px] h-[25px] hover:text-[#ed0b70]" />
          </a>
          <a href="https://github.com/Jacob3251" target="_blank">
            <FaGithub className="w-[25px] h-[25px] hover:text-[#ed0b70]" />
          </a>
          <a href="mailto:jacobfrye3251@gmail.com" target="_blank">
            <FaMailBulk className="w-[25px] h-[25px] hover:text-[#ed0b70]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
