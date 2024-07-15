/* eslint-disable no-unused-vars */
// ShreeLakshmiVishnumoorthyTemple.js
import React from 'react';
 import Img14 from '../assets/places/mg.jpg';
 import Img48 from '../assets/places/modgal2.jpg';
 import Img49 from '../assets/places/moodgal1.jpeg.jpg';


const Moodgal = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Moodgal Temple</h1>
      <div className="image-grid">
      <img src={Img14} alt="Moodgal" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img48} alt="Moodgal" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img49} alt="Moodgal" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      </div>


      <p className="text-xl text-gray-800">Moodgal is a serene and culturally rich village located near Kundapura in the Udupi district of Karnataka, India. Known for its scenic beauty, the village is surrounded by verdant landscapes and agricultural fields. Moodgal is home to several ancient temples, which are central to the village's cultural and religious life, attracting devotees and visitors seeking spiritual solace. The village's traditional architecture, local festivals, and warm hospitality reflect the rich heritage and vibrant community life of rural Karnataka, making Moodgal a charming and peaceful destination..</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/HC9MY3MLpoSVhVAY7" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
      <p className="text-sm text-gray-500 mt-2">Type: Temple</p>
      <p className="text-sm text-gray-500 mt-2">Opening Time: 24hrs</p>
      <p className="text-sm text-gray-500 mt-2">Closing Time: Nil</p>
      <p className="text-sm text-gray-500 mt-2">Speciality:Moodgal is renowned for its ancient temples, each steeped in history and cultural significance. These temples serve as focal points for religious practices and traditional festivals, drawing devotees and tourists alike to experience the spiritual and architectural heritage of rural Karnataka. The village's tranquil surroundings and close-knit community further enhance its appeal, offering visitors a glimpse into traditional village life and a serene atmosphere for spiritual contemplation.</p>


    </div>
  );
};

export default Moodgal;