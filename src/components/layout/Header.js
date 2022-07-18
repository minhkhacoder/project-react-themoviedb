/** @format */

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.svg";
const Header = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const handleShow = () => setShow(!show);
  const showMenu = { show, setShow, handleShow };
  useEffect(() => {
    const listener = async () => {
      if (window.scrollY === 0 && location.pathname === "/") {
        setAnimateHeader(false);
      } else {
        setAnimateHeader(true);
      }
    };

    if (location.pathname !== "/" && window.scrollY <= 140) {
      const header = document.querySelector("header");
      header.classList.add("header-bg");
    }
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [location.pathname]);
  return (
    <>
      <header
        className={`flex items-center justify-between h-[80px] page-container ${
          animateHeader ? "header-animated" : ""
        } top-0 overflow-hidden w-full fixed z-10`}
      >
        <div className="flex items-center justify-center gap-x-6">
          <img src={logo} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth="2"
            onClick={handleShow}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div className="flex items-center justify-center">
          <input
            type="text"
            className="p-2 border-2 text-white border-[#D1D5DB] focus:border-primary bg-transparent w-[500px] outline-none rounded-2xl relative"
            placeholder="What do you want to watch?"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute translate-x-56 cursor-pointer"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-x-7">
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0001 21.3636C18.5147 21.3636 21.3637 18.5145 21.3637 15C21.3637 11.4854 18.5147 8.63635 15.0001 8.63635C11.4856 8.63635 8.63647 11.4854 8.63647 15C8.63647 18.5145 11.4856 21.3636 15.0001 21.3636Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 1V3.54545"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 26.4545V29"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.09814 5.09814L6.90542 6.90542"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.0945 23.0945L24.9018 24.9018"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 15H3.54545"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.4546 15H29"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.09814 24.9018L6.90542 23.0945"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.0945 6.90542L24.9018 5.09814"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>
      <NavBar showMenu={showMenu}></NavBar>
    </>
  );
};

function NavBar({ showMenu }) {
  const { show, handleShow } = showMenu;
  const navigate = useNavigate();
  return (
    <div
      className={`fixed overflow-hidden top-0 left-0 z-50 h-full header-navbar ${
        show ? "transition-all" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between bg-black p-5 h-[80px] gap-x-7 mb-10">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-white">Zhoa Lusi</h2>
          <span className="text-sm font-normal text-[#909090]">
            ID: 0029212
          </span>
        </div>
        <span className="px-4 py-1 rounded-md  bg-white text-[#FF6B59]">
          VID
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
          strokeWidth="1"
          onClick={handleShow}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-5 px-10 cursor-pointer">
        <div
          className="flex items-center justify-start gap-x-4"
          onClick={() => navigate("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-xl font-normal text-white">Home</span>
        </div>
        <div className="flex items-center justify-start gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
            />
          </svg>
          <span className="text-xl font-normal text-white">Feature Movies</span>
        </div>
        <div className="flex items-center justify-start gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xl font-normal text-white">Trailer Movies</span>
        </div>
        <div className="flex items-center justify-start gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xl font-normal text-white">Feature Casts</span>
        </div>
        <div className="flex items-center justify-start gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="#fff"
          >
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          <span className="text-xl font-normal text-white">Rated Top</span>
        </div>
        <div className="flex items-center justify-start gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <span className="text-xl font-normal text-white">Setting</span>
        </div>
        <div className="flex items-center justify-start gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          <span className="text-xl font-normal text-white">Language</span>
        </div>
        <div className="flex items-center justify-start gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#BE123C"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="text-xl font-normal text-[#BE123C]">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
