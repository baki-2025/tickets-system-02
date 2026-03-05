import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-200 text-black shadow-sm px-4">

      {/* LEFT SIDE */}
      <div className="navbar-start">
        
        {/* Mobile Dropdown Button */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content 
                       bg-base-100 rounded-box z-[1] 
                       mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl">
          CS-Ticket System
        </a>
      </div>

      {/* CENTER (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end">
        <a className="btn bg-[#422AD5] text-white hover:bg-[#341bb5]">
          + New Ticket
        </a>
      </div>

    </div>
  );
};

export default Navbar;