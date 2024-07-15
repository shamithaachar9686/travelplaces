/* eslint-disable no-unused-vars */
// ShreeLakshmiVishnumoorthyTemple.js
import React from 'react';
 import Img10 from '../assets/places/Anjaneya.jpg';
 import Img40 from '../assets/places/An2.jpg';
 import Img41 from '../assets/places/A4.jpg';



const Anjaneya = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Prasanna Anjaneya Temple</h1>
      <div className="image-grid">
      <img src={Img10} alt="Anjaneya" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img40} alt="Anjaneya" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img41} alt="Anjaneya" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      </div>


      <p className="text-xl text-gray-800">The Prasanna Anjaneya Temple in Kundapura is a revered Hindu temple dedicated to Lord Hanuman, also known as Anjaneya. Located in the coastal town of Kundapura in Karnataka, India, this temple is renowned for its serene atmosphere and beautiful surroundings. Devotees visit the temple to seek blessings from Lord Hanuman, known for his strength, devotion, and protection. The temple architecture reflects traditional South Indian style, and it often hosts various religious ceremonies and festivals, attracting pilgrims and tourists alike.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/AB78tEZanmnshwB19" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
      <p className="text-sm text-gray-500 mt-2">Type: Temple</p>
      <p className="text-sm text-gray-500 mt-2">Opening Time: 8am</p>
      <p className="text-sm text-gray-500 mt-2">Closing Time: 6pm</p>
      <p className="text-sm text-gray-500 mt-2">Speciality:The Prasanna Anjaneya Temple in Kundapura is especially known for its tranquil ambiance and the powerful deity, Lord Hanuman, who is believed to bestow strength, courage, and protection upon his devotees. The temple serene coastal location and traditional South Indian architecture add to its spiritual charm, making it a significant pilgrimage site for worshipers seeking blessings and solace.</p>


    </div>
  );
};

export default Anjaneya;