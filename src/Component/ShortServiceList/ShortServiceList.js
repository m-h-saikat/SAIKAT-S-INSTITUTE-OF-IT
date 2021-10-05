import React, { useEffect, useState } from "react";
import "./ShortServiceList.css";
import image from "../../Image/HomePage (1).jpg";
import partner1 from "../../Image/member1.png";
import partner2 from "../../Image/partner8.png";
import partner3 from "../../Image//partner19.png";

const ShortServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./Course.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="  mb-5">
      <div className=" mb-4 Home-Section">
        <div className="row d-flex">
          <div className="col-md-6 ">
            <img src={image} alt="" width="100%" />
          </div>
          <div className="col-md-6 container p-5 my-auto mx-auto">
            <h1 className="text-danger mb-5 ">
              <b>
                WELCOME TO <br /> SAIKAT'S INSTITUTE OF IT
              </b>
            </h1>
            <p>
              SAIKAT'S INSTITUTE OF IT , one of the leading IT training
              institutes in Bangladesh offers the best training opportunities.
              It has been playing a vital role to eradicate the unemployment
              problem since 2008. Enriched with quality training this institute
              has never failed to help the individuals to reveal their talents
              making harmony between creativity and IT. No matter what is your
              background, we are offering 30 courses for you conducted by
              experienced trainers to advance your skills.
            </p>
          </div>
        </div>
      </div>

      <div className=" conatiner ">
        <h1 className="mt-5 mx-auto text-danger ">OUR MOST DESIRE COURSES</h1>

        <div className="row row-cols-1 row-cols-md-4 g-4 container mx-auto ">
          {services.map((service) => (
            <div className="col" key={service.key}>
              <div className="card h-60 shadow p-3 mb-5 mt-5 bg-white rounded">
                <img
                  src={service.img}
                  className="img-fluid rounded"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-danger">
                    <b>{service.Name}</b>
                  </h5>
                  <p className="card-text mt-3">{service.Duration}</p>
                </div>
                <div className="card-footer">
                  <p className="card-text  ">
                    <strong>{service.CourseFee}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5 text-center client">
        <h2 className="mx-auto text-primary mb-5">
          {" "}
          <strong>Our Top Rated Partner </strong>{" "}
        </h2>

        <div className="container p-3 mt-2 mb-5 rounded shadow bg-body">
          <div className="row row-cols-1 row-cols-md-3 ">
            <div className="  mx-auto col">
              <div className="">
                <img src={partner1} alt="" />
              </div>
            </div>

            <div className="  mx-auto col ">
              <div className="">
                <img src={partner2} alt="" />
              </div>
            </div>
            <div className="  mx-auto col ">
              <div className="">
                <img src={partner3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortServiceList;
