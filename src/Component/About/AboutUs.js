import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    
    <div className="  p-4 AboutUs-Section  ">
      <h1 className="m-5 ">
        <b>
          Welcome to{" "}
          <span className="text-danger">SAIKAT'S INSTITUTE OF IT</span> :{" "}
          <span className="text-primary">Where IT Leaders are Created</span>
        </b>
        <hr />
      </h1>

      <div>
        <div className="row d-flex">
          <div className="col-md-6 px-5">
            <p>
              SAIKAT'S INSTITUTE OF IT, where empowering the community for an
              excellent standard of learning is what we desire. We endeavor for
              the continuous improvement of our leaders who will work for
              constructing a better future. The institute is dedicated to
              serving the quality training programs under ISO 9001: 2015
              certification which remarks us in the IT world. We will continue
              to share our knowledge for contributing to the success of
              individuals and to serve society with the best interest.
            </p>
          </div>
          <div className="col-md-6 container px-5 my-auto mx-auto">
            <p>
              In this fast-paced digital world, achieving in career and reaching
              in targeted goal is depending on the proper execution of planning,
              implementing and sustaining changes. So getting there with an
              institution like us will be your wise choice. Your great
              experience of learning influences our way of training and thus we
              serve our students and engage with our commitments. Here we invite
              you to come and join us to have a change in the result of your
              life and thus we would be grateful to know you and to strengthen a
              long-lasting relationship.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission conatiner Start */}
      <div className="container">
        <h1 className="text-danger mt-5">
          <strong>
            <u>Mission</u>
          </strong>
        </h1>
        <div className="p-3 col-md-6  mx-auto ">
          <ul>
            <li>
              {" "}
              To empower the community by ensuring state of the art method which
              strengthens the belief in quality learning.
            </li>
            <li>
              To raise opportunities and growth by broadening the areas and
              possibilities for our future leaders.
            </li>
            <li>
              To connect best selected human resource for delivering standard
              values that supports leaders to flourish.
            </li>
            <li>
              To utilize the power of youth by serving and meeting the emerging
              needs both in local and global network.
            </li>
            <li>
              To reduce inequalities for the best interest of the society by
              creating international array of excellence.
            </li>
          </ul>
        </div>
      </div>
      {/* Our Mission conatiner End */}
    </div>
  );
};

export default AboutUs;
