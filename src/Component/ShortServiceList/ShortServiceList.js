import React, { useEffect, useState } from 'react';
import "./ShortServiceList.css"
const ShortServiceList = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
      fetch("./Course.json")
          .then((res) => res.json())
          .then((data) =>setServices(data));
    },[])
    return (

        
        <div className="container mt-5 mb-5" >

            <div>
          <h1 className="text-danger">WELCOME TO Saikat Institute of IT</h1>  
<p>Saikat Institute of IT ,a famous computer training school in Dhaka. It’s an ideal training Institute  for Learner’s to  design their carrier with the combination of their ambition to make them a successful skilled person with a stunning and bright future.It was established in 7th January 2012 in a small premises with the inspiration of an wonderful creative person SK HOSSAIN RAZIB, the Executive Director of Saikat Institute of IT, Which was a dream project of him.</p> 
<h1 className="text-danger mt-5 ">OUR MOST DESIRE COURSES</h1>
<hr/>

            </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {services.map(service => <div className="col"  key={service.key}>
                <div className="card h-100">
              
                    <img src={service.img} className="img-fluid rounded-start" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{service.Name}</h5>
                        <p className="card-text">{service.Duration}</p>
                    </div>
                    <div className="card-footer">
                        <p className="card-text"> {service.CourseFee}</p>
                    </div>
                </div>
            </div>)
            }

        </div>
    </div>
);
};


export default ShortServiceList;