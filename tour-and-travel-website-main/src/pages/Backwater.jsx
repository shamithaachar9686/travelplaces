/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img26 from '../assets/places/Backwater.jpg';


const Backwater = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sharavathi Backwater</h1>
      <img src={Img26} alt="Backwater" className="w-auto h-48 md:h-64 mx-auto mb-4" />

      <p className="text-xl text-gray-800 font-bold">Sharavathi backwater boating is an exciting and scenic activity that takes place in the Sharavathi River backwaters. The Sharavathi River is a major river in the state, known for its lush green surroundings and serene backwaters, making it a popular destination for boating enthusiasts and nature lovers.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/M9s5m4wzXLmRDecD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty:Honnavar's backwaters are distinguished by their tranquil setting along the Sharavati River, surrounded by lush mangrove forests. They offer a serene escape for boating, fishing, and birdwatching, showcasing the region's rich biodiversity. The backwaters also serve as a peaceful sanctuary, inviting visitors to relax and immerse themselves in the natural beauty of coastal Karnataka.</p>
    </div>
  );
};

export default Backwater;