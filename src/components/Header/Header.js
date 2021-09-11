import React from "react";
import "./Header.css";
import Riders from "../../images/Urban Riders.png";

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="logo">
        <img src={Riders} alt="logo" className="companylogo" />
      </a>
      <div className="header-right">
        <a  href="/">
          Home
        </a>
        <a href="/destination">Destination</a>
        <a href="/blog">Blog</a>
        <a href="/login" className="login-btn">Login</a>
      </div>
    </div>
  );
};

export default Header;
