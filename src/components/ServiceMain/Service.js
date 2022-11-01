import React, { useEffect, useState } from "react";
import Service from "../Home/Service/Service";

const ServiceMain = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="info-heading text-center my-5 underline ">
        Our Services & Facilities
      </h1>
      {/* services mapped below */}
      <div>
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceMain;
