import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Image/Logo.png'
import './Header.css'
const Header = () => {
    return (
      
            

   <div className="  header d-flex align-items-center justify-content-between px-5">
            <div>
                <img className="my-auto" src={Logo} alt="" width="40" height="40" />
            </div>
           <div className="menu-container d-flex">
              <ul className="navlink align-items-end justify-content-end">
                <Link to="/Home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/AboutUs" className="items">
                  <li>About Us</li>
                </Link>
                <Link to="/Service" className="items">
                  <li>Service</li>
                </Link>
                <Link to="contact" className="items">
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
        </div>


       
    );
};

export default Header;