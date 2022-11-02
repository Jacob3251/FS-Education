import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FaStream } from "react-icons/fa";
import Logo from "../../../Images/Fs.png";
import "./Header.css";
import auth from "../../../firebase_init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
const Header = () => {
  const [user] = useAuthState(auth);
  // const [signOut, loading, error] = useSignOut(auth);
  const activeDesign = "text-red-500 text-underline scale-125 header-text";
  const [activeSide, setActiveSide] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="">
      <div className="main-header flex justify-evenly  items-center px-3 py-2 rounded-md hover:shadow-md hover:shadow-[#ed0b70] duration-150">
        {/* Left header logo below */}
        <div className="w-1/3">
          <img
            className="hover:scale-125 duration-150"
            src={Logo}
            onClick={() => {
              navigate("/home");
            }}
            alt="Website-logo"
            width={40}
          />
        </div>
        {/* Company Name */}
        <div className="w-1/3">
          <h1 className="company-name">Free Square Education Consultancy</h1>
        </div>
        {/* Menu here below */}
        <div className="menuBar w-1/3">
          <ul className="flex space-x-3 justify-end">
            <li className="header-text">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="header-text">
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text"
                }
              >
                Service
              </NavLink>
            </li>
            <li className="header-text">
              <NavLink
                to="blogs"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className="header-text">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text"
                }
              >
                About
              </NavLink>
            </li>
            {!user && (
              <li className="header-text">
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    isActive ? activeDesign : "header-text"
                  }
                >
                  login
                </NavLink>
              </li>
            )}
            {!user && (
              <li className="header-text">
                <NavLink
                  to="register"
                  className={({ isActive }) =>
                    isActive ? activeDesign : "header-text"
                  }
                >
                  SignUp
                </NavLink>
              </li>
            )}
            {user && (
              <li className="header-text">
                <button
                  className="header-text"
                  onClick={() => {
                    signOut(auth);
                    toast("You're logged out", {
                      position: "bottom-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  }}
                >
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>
        <button
          className="sideMenuIcon"
          onClick={() => setActiveSide(!activeSide)}
        >
          <FaStream />
        </button>
      </div>
      {/* sidemenu mini */}
      <div className={`text-center my-2 ${activeSide ? "block" : "hidden"}`}>
        <ul className="space-y-2">
          <li>
            <NavLink
              onClick={() => {
                setActiveSide(!activeSide);
              }}
              to="/home"
              className={({ isActive }) =>
                isActive ? activeDesign : "header-text"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setActiveSide(!activeSide);
              }}
              to="/service"
              className={({ isActive }) =>
                isActive ? activeDesign : "header-text"
              }
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setActiveSide(!activeSide);
              }}
              to="blogs"
              className={({ isActive }) =>
                isActive ? activeDesign : "header-text"
              }
            >
              Blogs
            </NavLink>
          </li>
          {!user && (
            <li className="header-text">
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text"
                }
              >
                login
              </NavLink>
            </li>
          )}
          {!user && (
            <li className="header-text">
              <NavLink
                to="register"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text"
                }
              >
                SignUp
              </NavLink>
            </li>
          )}
          {user && (
            <li className="header-text">
              <button
                className="header-text"
                onClick={() => {
                  signOut(auth);
                  toast("You're logged out", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                }}
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
