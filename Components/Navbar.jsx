import React from "react";
import logo from '../Assets/Manzil-imgs/Manzil-Logo.jpeg';
import  '../Styles/Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
  return (
   <>
    <nav className=" navbar fixed-top navbar-expand-lg ">
    
        {/* Logo */}
        <div className="Navbar-nav">
        <div className="navbar-brand bg-Light" href="#">
          <img 
            src={`${logo}`}
            alt="logo"
            className="manzil-one-logo"
          />
        </div>
        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav bg-Blue nav-list">
            <li className="nav-item nav-list">
              <Link className="nav-link  Light" to="/">Home</Link>
            </li>
            <li className="nav-item nav-list">
              <Link className="nav-link Light" to="About">About</Link>
            </li>
            <li className="nav-item nav-list">
              <Link className="nav-link Light" to="Tour#">Tour</Link>
            </li>
            <li className="nav-item nav-list">
              <Link className="nav-link Light" to="Contact">Contact</Link>
            </li>
          </ul>
      </div>
      </div>
    </nav>
   </>
  );
}

export default Navbar;