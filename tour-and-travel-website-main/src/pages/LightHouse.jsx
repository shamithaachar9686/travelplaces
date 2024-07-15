/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img28 from '../assets/places/Bhatkal.jpg';


const LightHouse= () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">LightHouse Bhatkal</h1>
      <img src={Img28} alt="LightHouse" className="w-auto h-48 md:h-64 mx-auto mb-4" />

      <p className="text-xl text-gray-800 font-bold">The Lighthouse stands by the side of ruins of a Fort on the summit of the hill overlooking the port at the entrance of Bhatkal creek.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/VUXbosXVxxpUhCB97" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty: It offers a breathtaking view of the sea.</p>
    </div>
  );
};

export default LightHouse;