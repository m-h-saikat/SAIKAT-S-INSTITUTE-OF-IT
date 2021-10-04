import React from "react";
import contactImg from "../../Image/contactUs.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";
const Contact = () => {
  return (
    <div className=" ">
      <div>
        <img src={contactImg} alt="" className="img-fluid w-100" />
      </div>
      <div className=" text-center container d-flex  mx-auto justify-content-center">
        <div className="contact border border-light">
          <h4>
            Email Here <hr />
            <FontAwesomeIcon icon={faEnvelope} /> saikat@gmail.com
          </h4>
        </div>
        <div className="contact border border-light">
          <h4>
            Location Here <hr />
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Dhanmondi , Dhaka-1630
          </h4>
        </div>
        <div className="contact border border-light">
          <h4>
            Call Here <hr />
            <FontAwesomeIcon icon={faPhoneAlt} /> +880196-12644444
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
