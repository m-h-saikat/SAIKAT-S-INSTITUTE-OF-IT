import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Image/4792249.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="m-auto navbar navbar-expand-md navbar-dark ">
        <div className="container ">
          <img
            className="my-auto logo  ms-5"
            src={Logo}
            alt=""
            width="60"
            height="60"
          />
        </div>
        <div className="me-1">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className=" navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/Home" className="items">
                  <li>
                    <button className="btn btn-white me-4 ">Home</button>
                  </li>
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link to="/AboutUs" className="items">
                  <li>
                    <button className="btn btn-white me-4 ">About</button>
                  </li>
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link to="/Service" className="items">
                  <li>
                    <button className="btn btn-white me-4">Course</button>
                  </li>
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link to="contact" className="items">
                  <li>
                    <button className="btn btn-white me-4 ">Contact</button>
                  </li>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
