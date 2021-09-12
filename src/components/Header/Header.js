import React from "react";
import "./Header.css";
import Riders from "../../images/Urban Riders.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="logo">
        <img src={Riders} alt="logo" className="companylogo" />
      </NavLink>
      <div className="header-right">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/destination">Destination</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
