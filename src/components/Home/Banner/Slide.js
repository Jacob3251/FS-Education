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
          <div className="info-btn duration-200 bg-pink-500 hover:bg-pink-400">
            <button className=" ">Press me</button>
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
