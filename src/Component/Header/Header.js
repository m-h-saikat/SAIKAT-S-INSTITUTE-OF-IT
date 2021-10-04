import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Image/4792249.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="  header d-flex align-items-center justify-content-between px-5">
      <div className="ms-5">
        <img
          className="my-auto logo p-2"
          src={Logo}
          alt=""
          width="60"
          height="60"
        />
      </div>
      <div className="menu-container d-flex me-5">
        <ul className="navlink align-items-end justify-content-end">
          <Link to="/Home" className="items">
            <li>
              <button className="btn btn-white ">Home</button>
            </li>
          </Link>
          <Link to="/AboutUs" className="items">
            <li>
              <button className="btn btn-white ">About Us</button>
            </li>
          </Link>
          <Link to="/Service" className="items">
            <li>
              <button className="btn btn-white ">Course</button>
            </li>
          </Link>
          <Link to="contact" className="items">
            <li>
              <button className="btn btn-white ">Contact</button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
