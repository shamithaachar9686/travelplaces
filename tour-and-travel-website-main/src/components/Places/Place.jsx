/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Place = ({  img, }) => {
  return (
    <div className="place-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={img}  className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2"></h2>
        {/* <Link to={`/place/${id}`} className="text-primary hover:underline">
          Learn more
        </Link> */}
      </div>
    </div>
  );
};

export default Place;
