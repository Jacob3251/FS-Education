import React from "react";
import "./Slide.css";

const Slide = ({ scholarship }) => {
  const { id, title, country, path, description, img } = scholarship;
  return (
    <div className=" h-[500px] ">
      <div className="img flex justify-evenly ">
        <div className="info w-1/2 flex flex-col justify-evenly items-start bg-gradient-to-r from-sky-500 to-pink-500">
          <h1 className="info-heading  ">
            {title} <span>{country}</span>
          </h1>
          <p className="info-description">
            {description} {country}.
          </p>
          <div className="info-btn hover:scale-110 duration-150 text-white font-medium hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600">
            <button className=" ">Contact Now!</button>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-full" src={img} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
