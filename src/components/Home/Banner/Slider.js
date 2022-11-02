import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../index.css";
import Slide from "./Slide";
const Slider = () => {
  const [scholarship, setScholarship] = useState([]);
  useEffect(() => {
    fetch("Scholarship.json")
      .then((res) => res.json())
      .then((data) => setScholarship(data));
  }, []);
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showThumbs={false}
      showStatus={false}
    >
      {scholarship.map((scholarship) => (
        <Slide key={scholarship.id} scholarship={scholarship} />
      ))}
    </Carousel>
  );
};

export default Slider;
