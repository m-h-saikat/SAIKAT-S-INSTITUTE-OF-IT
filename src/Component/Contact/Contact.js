import React from "react";
import contactImg from "../../Image/contactUs.jpg";
import faq from "../../Image/faq.png";
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

      {/* Contact Information Start    */}

      <div className="row row-cols-1 row-cols-md-4  container mx-auto mb-5  mt-5 justify-content-center">
        <div className="card  h-60 shadow p-3  me-5  contact border border-light rounded">
          <h4>
            Email Here <hr />
            <FontAwesomeIcon icon={faEnvelope} /> saikat@gmail.com
          </h4>
        </div>
        <div className="card h-60 shadow p-3  me-5 contact border border-light rounded">
          <h4>
            Location Here <hr />
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Dhanmondi , Dhaka-1630
          </h4>
        </div>
        <div className="card h-60 shadow p-3  me-5 contact border border-light rounded">
          <h4>
            Call Here <hr />
            <FontAwesomeIcon icon={faPhoneAlt} /> +880196-12644444
          </h4>
        </div>
      </div>

      {/* Contact Information End    */}

      {/*FAQ Start    */}

      <div className="container">
        <h2 className="my-5 text-center text-danger">
          {" "}
          <strong>Frequently Asked Questions</strong>{" "}
        </h2>
        <div className="container d-lg-flex">
          <div className="mb-3 col-md-6">
            <img src={faq} width="100%" height="90%" alt="" />
          </div>

          <div className="my-auto col-md-6 ms-4 ">
            <div className="accordion" id="accordionExample">
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How much is the course Fee?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      {" "}
                      The course fee for different courses vary. You can go to
                      our list of courses here, pick a course that you prefer
                      and see for the course fee.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Can I pay the Course fee by installment?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      You can pay the course fee in three installments maximum
                      after enrolling in the course. Besides we offer discounts
                      at different times that will deduct the course fee
                      according to its percentage
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Why the course fee is too high?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      We believe in quality of learning. The standard of
                      learning that we offer is worth what you will pay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What is the minimum required down payment?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The minimum required down payment for any course is TK
                      8,500/- and rest of the amount can be paid in
                      installments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*FAQ End    */}
    </div>
  );
};

export default Contact;
