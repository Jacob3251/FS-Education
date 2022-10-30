import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaStream } from "react-icons/fa";
import Logo from "../../../Images/Fs.png";
import "./Header.css";
const Header = () => {
  const activeDesign = "text-red-500 text-underline scale-125";
  const [activeSide, setActiveSide] = useState(false);
  return (
    <header className="">
      <div className="main-header flex justify-evenly  items-center px-3 py-2 rounded-md hover:shadow-md hover:shadow-[#ed0b70] duration-150">
        {/* Left header logo below */}
        <div className="w-1/3">
          <img src={Logo} alt="Website-logo" width={40} />
        </div>
        {/* Company Name */}
        <div className="w-1/3">
          <h1 className="company-name">Free Square Education Consultancy</h1>
        </div>
        {/* Menu here below */}
        <div className="menuBar w-1/3">
          <ul className="flex space-x-3 justify-end">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? activeDesign : undefined
                }
                //   className={({ isActive }) =>
                //     isActive ? activeDesign : undefined
                //   }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  isActive ? activeDesign : undefined
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blogs"
                className={({ isActive }) =>
                  isActive ? activeDesign : undefined
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? activeDesign : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? activeDesign : undefined
                }
              >
                login
              </NavLink>
            </li>
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
                isActive ? activeDesign : undefined
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
              to="services"
              className={({ isActive }) =>
                isActive ? activeDesign : undefined
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
                isActive ? activeDesign : undefined
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setActiveSide(!activeSide);
              }}
              to="about"
              className={({ isActive }) =>
                isActive ? activeDesign : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setActiveSide(!activeSide);
              }}
              to="login"
              className={({ isActive }) =>
                isActive ? activeDesign : undefined
              }
            >
              login
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
