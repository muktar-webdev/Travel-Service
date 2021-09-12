import React from "react";
import "./Home.css";
// --Router Imported --//
import { Link, NavLink } from "react-router-dom";

// --Image Import --//
import Header from "../Header/Header";
import Bike from "../../images/bike.png";
import Car from "../../images/car.png";
import Bus from "../../images/bus.png";
import Train from "../../images/train.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* --Bike-- */}
      <NavLink to="/destination" className="navlink-style">
        <div className="card">
          <img src={Bike} alt="bike" />
          <div className="card-content">
            <h2>Bike Service</h2>
          </div>
        </div>
      </NavLink>
      {/* --Car-- */}
      <NavLink to="/destination" className="navlink-style">
        <div className="card">
          <img src={Car} alt="bike" />
          <div className="card-content">
            <h2>Car Service</h2>
          </div>
        </div>
      </NavLink>
      {/* --Bus-- */}
      <NavLink to="/destination" className="navlink-style">
        <div className="card">
          <img src={Bus} alt="bike" />
          <div className="card-content">
            <h2>Bus Service</h2>
          </div>
        </div>
      </NavLink>
      {/* --Train-- */}
      <NavLink to="/destination" className="navlink-style">
        <div className="card">
          <img src={Train} alt="bike" />
          <div className="card-content">
            <h2>Train Service</h2>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
