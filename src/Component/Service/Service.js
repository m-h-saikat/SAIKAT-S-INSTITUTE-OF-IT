import React, { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import ServiceBanner from '../../Image/Coursebanner.jpg'

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./Service.json")
            .then((res) => res.json())
            .then((data) =>setServices(data));
      },[])
    return (
        <div>
       
         <div>
         <img src={ServiceBanner} height="300px" alt="" className="image-fluid w-100" />
         </div>
              <div className="p-5 row row-cols-1 row-cols-md-3 g-4">
            {services.map(service => <div className="col"  key={service.key}>
                <div className="card h-100">
              
                    <img src={service.img} className="img-fluid rounded-start" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title text-danger"><b>{service.Name}</b> </h5>
                        <p className="card-text font-italic">{service.About}</p>
                    </div>
                    <div className="card-footer">
                        <p className="card-text text-primary"> <strong> {service.Duration} <br /> {service.CourseFee} </strong></p>
                    </div>
                </div>
            </div>)
            }

        </div>  
        </div>
    );
};

export default Service;