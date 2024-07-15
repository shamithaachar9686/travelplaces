
/* eslint-disable no-unused-vars */
// src/pages/Home.jsx
import React, { useState } from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import NatureVid from "../assets/video/main.mp4";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DistrictPopup from "./DistrictPopup"; 




const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  
  return (
    <>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
      </div>

      <BlogsComp />

      <div className="flex justify-center mt-10">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={openPopup}
        >
          Explore More
        </button>
        
      </div>

      {showPopup && <DistrictPopup onClose={closePopup} />}
    </>
  );
};

export default Home;