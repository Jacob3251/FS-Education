import React, { useEffect, useState } from "react";
import axios from "axios";
const useService = (id) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get("services.json").then((res) => console.log(res));
  }, []);
  return [services, setServices];
};

export default useService;
