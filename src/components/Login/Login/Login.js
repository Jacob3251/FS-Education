import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../Images/Fs.png";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase_init";
import { toast, ToastContainer } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const formRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    toast("You're logged successfully", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate(from, { replace: true });
  }
  if (loading) {
    return (
      <div className="flex justify-center  h-full min-h-[450px] sm:min-h-[575px] md:min-h-[625px]  items-center mt-[-35px]">
        <HashLoader color="#ed0b70" />
      </div>
    );
  }
  let errorElement;
  if (error) {
    errorElement = (
      <div className="text-center font-medium text-xl text-red-500">
        Error: {error.message}
      </div>
    );
  }
  let emailSending;
  if (sending) {
    emailSending = (
      <div className="flex justify-center  h-full min-h-[450px] sm:min-h-[575px] md:min-h-[625px]  items-center mt-[-35px]">
        <HashLoader color="#ed0b70" />
      </div>
    );
    // toast("Password reset email sent");
  }
  const handleRePass = async () => {
    const email = formRef.current[0].value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast(`Recovery email sent to ${email}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast("Fill email", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    errorElement = <div></div>;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = formRef.current[0].value;
    const password = formRef.current[1].value;

    signInWithEmailAndPassword(email, password);
    event.target.reset();
  };
  return (
    <div className="w-[50%] mx-auto  my-10 ">
      <div className=" h-[150px] w-[170px] mx-auto">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <form className="login-form w-full" ref={formRef} onSubmit={handleSubmit}>
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
        />
        <button
          onClick={handleRePass}
          className=" mx-auto w-[80%] block info-btn hover:scale-90 duration-150 text-white font-medium hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600"
        >
          Forget Password
        </button>
        <input
          type="submit"
          value="Login"
          className="mt-2 mx-auto w-[80%] block info-btn hover:scale-90 duration-150 text-white font-medium hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600"
        />
      </form>
      {errorElement}
      {emailSending}
      <p className="text-center text-gray-500 text-md my-5">
        Don't have an account?{"   "}
        <span className="login-toggle hover:underline hover:scale-105 inline-block duration-100">
          <Link to="/register">Create an Account</Link>
        </span>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer limit={1} />
    </div>
  );
};

export default Login;
