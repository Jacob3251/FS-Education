import { stringify } from "postcss";
import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, service_name, price, image, description } = service;
  const navigate = useNavigate();
  console.log(service);
  const addToDb = (object) => {
    let booking = {};
    const booked = localStorage.getItem("booked");
    if (booked) {
      booking = JSON.parse(booked);
    }
    booking = service;
    localStorage.setItem("booked", JSON.stringify(booking));
  };
  return (
    <div className="mx-5 hover:scale-[1.01] md:hover:scale-[1] md:scale-100 duration-200 ">
      <div
        className={`block mx-auto my-5 md:my-0 bg-[#ff3b93e3] md:flex ${
          id % 2 === 0
            ? "justify-start text-left"
            : "flex-row-reverse justify-end text-right"
        }`}
      >
        <div className="w-full md:w-1/2">
          <img src={image} className="w-full h-full hover:opacity-90" />
        </div>
        {/* info part */}
        <div className="w-full md:w-1/2">
          <div className="space-y-5 px-10 py-5 md:flex-col md:pt-[10%]">
            <h3 className="mt-5 text-xl text-white font-semibold underline">
              {service_name}
            </h3>
            <p className="text-sm text-white font-semibold">{description}</p>
            <button
              onClick={() => {
                addToDb(service);
                navigate(`/checkout/${id}`);
              }}
              className="px-4 py-2  hover:scale-110 duration-150 text-white font-medium hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
