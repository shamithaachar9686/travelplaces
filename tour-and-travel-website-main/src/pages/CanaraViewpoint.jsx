/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img4 from '../assets/places/c1.png';
import Img60 from '../assets/places/c2.png';
import Img61 from '../assets/places/c3.png';
import './styles.css';


const KoilaFarm = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Canara View Point</h1>
      <div className="image-grid">
      <img src={Img4} alt="Koila Farm" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img60} alt="Koila Farm" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img61} alt="Koila Farm" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      </div>

      <p className="text-xl text-gray-800 font-bold">The viewpoint is known for its serene atmosphere and the opportunity it provides to witness stunning sunsets and expansive vistas of the coastline.</p>
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

export default KoilaFarm;