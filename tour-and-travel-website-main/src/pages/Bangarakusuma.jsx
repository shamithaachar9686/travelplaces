/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img28 from '../assets/places/Bg.JPG';


const Bangarakusuma= () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Koila Farm</h1>
      <img src={Img28} alt="Bangarakusuma" className="w-auto h-48 md:h-64 mx-auto mb-4" />

      <p className="text-xl text-gray-800 font-bold">Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/M9s5m4wzXLmRDecD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty: We can Enjoy With Nature</p>
    </div>
  );
};

export default Bangarakusuma;