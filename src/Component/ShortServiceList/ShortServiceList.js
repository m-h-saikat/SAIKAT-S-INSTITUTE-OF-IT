import React, { useEffect, useState } from "react";
import "./ShortServiceList.css";
import image from "../../Image/HomePage (1).jpg";
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
              SAIKAT'S INSTITUTE OF IT ,a famous computer training school in
              Dhaka. It’s an ideal training Institute for Learner’s to design
              their carrier with the combination of their ambition to make them
              a successful skilled person with a stunning and bright future.It
              was established in 7th January 2012 in a small premises with the
              inspiration of an wonderful creative person SAIKAT, the Executive
              Director of SAIKAT'S INSTITUTE OF IT, Which was a dream project of
              him.
            </p>
          </div>
        </div>
      </div>

      <div className=" conatiner ">
        <h1 className="mt-5 mx-auto text-danger ">OUR MOST DESIRE COURSES</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto ">
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
    </div>
  );
};

export default ShortServiceList;
