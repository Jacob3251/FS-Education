import React, { useState } from "react";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="">
      <Slider />
      <div className="mx-16">
        <p>
          <span className="font-bold text-xl text-[#d62626] text-left">
            Free Square Education Consultancy
          </span>{" "}
          is a Consultancy firm in Bangladesh founded in 2022, specializing in
          different aspects of International Education and student analytics
          with educational institutions, Governmental & Non-Governmental
          organizations in Bangladesh & Abroad. We have helped students get to
          various institutions in Australia, UK, Sweden, Norway, Denmark,
          Canada, USA. Our successful students got admission and visas and are
          studying at many top universities in the world.
        </p>
      </div>
    </div>
  );
};

export default Banner;
