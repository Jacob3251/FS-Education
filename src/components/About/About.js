import React from "react";
import proPik from "../../Images/about.jpeg";
const About = () => {
  return (
    <div className="w-[75%] mx-auto  my-20 min-h-[80vh] flex flex-col-reverse space-x-5  md:flex-row md:justify-center md:items-center">
      <div className="mb">
        <h3 className="text-4xl text-[#ed0b70] my-4 text-center md:text-left font-semibold font-mono">
          Md. Nayeem Hasan Adil
        </h3>
        <p className="text-lg text-center md:text-left">
          My graduation is almost over therefore it's high time I try to
          reinvent myself for the better. I've been Programming Hero by Jhankar
          Mahbub and Redux Course from LWS. I am also practicing coding problem
          so that I can sharpen my mind. I am looking forward to getting my job
          before my graduation event.
        </p>
      </div>
      <div>
        <img src={proPik} className="" alt="" />
      </div>
    </div>
  );
};

export default About;
