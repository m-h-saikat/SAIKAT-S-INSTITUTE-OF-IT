import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Image/4792249.jpg'
import './Header.css'
const Header = () => {
    return (
      
            

   <div className="  header d-flex align-items-center justify-content-between px-5">
            <div className="ms-5">
                <img className="my-auto logo p-2" src={Logo} alt="" width="60" height="60" />
            </div>
           <div className="menu-container d-flex me-5">
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