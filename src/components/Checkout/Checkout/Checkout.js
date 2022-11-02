import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useService from "../../../hooks/useService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = () => {
  const { id } = useParams();
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const getCart = localStorage.getItem("booked");
  let gotCart;
  if (getCart) {
    gotCart = JSON.parse(getCart);
  }
  // console.log(gotCart);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = formRef.current[0].value;
    const email = formRef.current[1].value;
    const address = formRef.current[3].value;
    const number = formRef.current[4].value;
    console.log(name, email, address, number);

    toast.success(`"Your information has been collected ${name}!!`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    e.target.reset();
  };
  return (
    <div className="flex mt-2">
      <div className="w-2/3 mx-auto border-2 border-dashed bg-slate-300">
        <h3 className="font-semibold text-[24px] text-center mt-8">
          Applicant Information
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col my-5 space-y-5 p-10  "
        >
          <input
            type="text"
            name="Name"
            placeholder="Enter Name"
            className="pl-4 h-12 focus:outline-none"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Enter Email"
            className="pl-4 h-12 focus:outline-none"
            required
          />
          <input
            type="text"
            name="Address"
            placeholder="Enter Address"
            className="pl-4 h-12 focus:outline-none"
            required
          />
          <input
            className="pl-4 h-12 focus:outline-none"
            type="number"
            name="PhoneNumber"
            placeholder="Enter PhoneNumber"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="info-btn hover:scale-90 duration-150 text-white font-medium hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600"
          />
        </form>
      </div>
      {/* seleted booking */}
      <div className="w-1/3 bg-slate-200 ">
        <div className="space-y-10 px-5">
          <h1 className="font-semibold text-[24px] text-center mt-8">
            Booking Information
          </h1>
          <h3 className="my-5 font-bold text-md">
            Booked Service: <br />
            <span className="text-gray-800">{gotCart.service_name}</span>
          </h3>
          <p className=" font-bold text-md">
            Price: <br />
            <span className="text-gray-800">{gotCart.price}</span>
          </p>
          <p className="font-bold text-md">
            Booking Time: <br />
            <span className="text-gray-800">
              {date}-{month}-{year}
            </span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Checkout;
