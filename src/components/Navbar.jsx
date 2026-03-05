import React from 'react';

const Navbar = () => {
    return (
        
             <div className="navbar bg-gray-200 text-black shadow-sm ">
  <div className="navbar-start">
   
    <a className="btn btn-ghost text-xl">CS-Ticket System</a>
  </div>
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
  <div className="navbar-end">
    <a className="btn bg-[#422AD5]">+ New Ticket</a>
  </div>
</div>
        
    );
};

export default Navbar;

