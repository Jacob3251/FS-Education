import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import auth from "../../../firebase_init";
import HashLoader from "react-spinners/HashLoader";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  if (loading || loading1) {
    return (
      <div className="flex justify-center  items-center">
        <HashLoader color="#ed0b70" />
      </div>
    );
  }
  if (user || user1) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-red-500 text-center">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  const handleFacebookSocial = () => {};
  const handleGithubSocial = () => {};
  return (
    <div className="w-[80%] mx-auto">
      {errorElement}
      <div className=" flex items-center">
        <div className="w-[50%] bg-black" style={{ height: "1px" }}></div>
        <p className="bg-white p-2">Or</p>
        <div className="w-[50%] bg-black" style={{ height: "1px" }}></div>
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={() => {
            signInWithGoogle();
          }}
          className="w-[50px] sm:w-[70px] md:w-[150px]  px-4 h-[40px] flex items-center md:mx-3 lg:mx-2  info-btn hover:scale-90 duration-150 text-white hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600"
        >
          <FaGoogle className="" />
          <span className="pl-3 text-[12px] hidden md:inline-block">
            Google Sign In
          </span>
        </button>
        <button
          onClick={handleFacebookSocial}
          className="w-[50px] sm:w-[70px] md:w-[150px]  px-4 h-[40px] flex items-center md:mx-3 lg:mx-2  info-btn hover:scale-90 duration-150 text-white hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600"
        >
          <FaFacebook />
          <span className="pl-3 text-[12px] hidden md:inline-block">
            Facebook Login
          </span>
        </button>
        <button
          onClick={() => {
            signInWithGithub();
          }}
          className="w-[50px] sm:w-[70px] md:w-[150px]  px-4 h-[40px] flex items-center md:mx-3 lg:mx-2  info-btn hover:scale-90 duration-150 text-white hover:shadow-indigo-400 hover:outline-indigo-600 hover:bg-white hover:text-indigo-500 hover:shadow-lg bg-indigo-600"
        >
          <FaGithub />
          <span className="pl-3 text-[12px] hidden md:inline-block">
            Github Login
          </span>
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SocialLogin;
