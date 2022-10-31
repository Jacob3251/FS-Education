import React from "react";

const NotFound = () => {
  return (
    <div className="my-[5%]">
      <div className="flex flex-col my-[50px] lg:flex-row justify-evenly items-center ">
        <div className="">
          <h3 className="text-4xl md:text-6xl text-pink-600 font-sans font-semibold my-5">
            404 Page not found
          </h3>
        </div>
        <div className=" h-full min-h-[450px] sm:min-h-[575px] md:min-h-[625px] flex items-center mt-[-35px]">
          <div className=" h-[280px] w-[350px] rounded-none lg:h-[420px] lg:w-[420px] md:rounded-full ">
            <img
              src="https://images.gr-assets.com/hostedimages/1570845146ra/28281205.gif"
              className="w-full h-full rounded-none lg:rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
