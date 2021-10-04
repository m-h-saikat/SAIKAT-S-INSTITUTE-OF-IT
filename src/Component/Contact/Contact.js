import React from 'react';
import contactImg from '../../Image/contactUs.jpg'
import './contact.css'
const Contact = () => {
   
    return (
        <div className=" ">
         <div>
         <img src={contactImg} alt="" className="img-fluid w-100"/>
         </div>
         <div className=" text-center container d-flex  mx-auto justify-content-center">
             <div className="contact border border-light"><h4>Email Here <hr />
             saikat@gmail.com</h4></div>
             <div className="contact border border-light"><h4>Location Here <hr />  
             Dhanmondi , Dhaka-1630</h4></div>
             <div className="contact border border-light"><h4>Call Here <hr />
             +880196-12644444</h4></div>

         </div>

        </div>
    );
};

export default Contact;