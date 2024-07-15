/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img7 from '../assets/places/Anadka.jpg';
import Img70 from '../assets/places/didupe1.jpg';
import Img71 from '../assets/places/didupe2.jpg';


const Anadka = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Didupe Falls</h1>
      <div className="image-grid">
      <img src={Img7} alt="Anadka" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img70} alt="Anadka" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img71} alt="Anadka" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      </div>

      <p className="text-xl text-gray-800 font-bold">Didupe is a beautiful waterfalls situated in Dakshina Kannada district of Karnataka. It is located near to Emrai waterfalls which is also known for the beautiful surroundings.Didupe falls also called as Anadka falls is located nearly 3 km away from Didupe village</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/jp5qNSdWBPcL1kvL6" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time:Always</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: Always</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty: It is a cozy and unexposed place, which has not yet grabbed the attention of the tourists.
  </p>
    </div>
  );
};

export default Anadka;