/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img21 from '../assets/places/bhima.jpeg';


const Bhimanagudda= () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bhimanagudda Hill</h1>
      <img src={Img21} alt="Bhimanagudda" className="w-auto h-48 md:h-64 mx-auto mb-4" />

      <p className="text-xl text-gray-800 font-bold">Bhimangudda Hill stands as a sentinel, promising breathtaking rewards to those who ascend its slopes. As the day wanes, the hill transforms into a stage for nature's most spectacular performance - the sunset. Its panoramic views and serene ambiance make it an idyllic retreat for soul-searching and adventure alike.Experience the magic of Bhimangudda Hill, where the sky paints a masterpiece with every sunset. This hilltop haven offers not just a view, but an encounter with nature's grandeur.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/M9s5m4wzXLmRDecD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty:  Witness nature's masterpiece as the sky transforms into a canvas of vibrant colors.
 Escape the hustle and bustle of daily life and immerse yourself in tranquility.
 Explore the hill's natural beauty through various trails suitable for adventurers of all levels.</p>
    </div>
  );
};

export default Bhimanagudda;