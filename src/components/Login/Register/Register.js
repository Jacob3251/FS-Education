import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Images/Fs.png";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import HashLoader from "react-spinners/HashLoader";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase_init";
const Register = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (loading) {
    return (
      <div className="flex justify-center  h-full min-h-[450px] sm:min-h-[575px] md:min-h-[625px]  items-center mt-[-35px]">
        <HashLoader color="#ed0b70" />
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }
  let errorElement;
  if (error) {
    errorElement = (
      <div className="text-center font-medium text-xl text-red-500">
        Error: {error.message}
      </div>
    );
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = formRef.current[0].value;
    const email = formRef.current[1].value;
    const password = formRef.current[2].value;
    createUserWithEmailAndPassword(email, password);

    event.target.reset();
    // console.log(name, email, password);
  };
  return (
    <div className="w-[50%] mx-auto  my-10 ">
      <div className=" h-[150px] w-[170px] mx-auto">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <form
        className="login-form w-full"
        ref={formRef}
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="login-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="login-input"
          required
        />

        <input
          type="submit"
          value="Register"
          className="mt-2 mx-auto w-[80%] block info-btn hover:scale-90 duration-150 text-white font-medium hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600"
        />
      </form>
      {errorElement}
      <p className="text-center text-gray-500 text-md my-5">
        Already have an account?{"   "}
        <span className="login-toggle hover:underline hover:scale-105 inline-block duration-100">
          <Link to="/login">Login Now</Link>
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
