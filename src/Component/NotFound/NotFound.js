import React from "react";

import notFound from "../../Image/Capture.PNG";
const NotFound = () => {
  return (
    <div className="mt-2 mb-2">
      <h4 className="text-danger mx-auto  ">No Page Found !!! </h4>
      <h5 className="mx-auto">Route not found!</h5>
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
