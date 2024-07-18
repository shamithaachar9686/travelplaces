/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img8 from '../assets/places/saripalla.jpg';
import Img72 from '../assets/places/saripalla10.jpg';


const Saripalla= () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Saripalla View Point</h1>
      <div className="image-grid">
      <img src={Img8} alt="Saripalla" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img72} alt="Saripalla" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      
      </div>

      <p className="text-xl text-gray-800 font-bold">Nestled in the Western Ghats of Karnataka, Saripalla Viewpoint is a hidden gem offering breathtaking panoramic views of Mangalore city. Located about 15 kilometers from the city center, this tranquil spot is perfect for nature lovers and adventure enthusiasts. The journey to the viewpoint involves navigating winding roads through dense forests, with the air becoming cooler as you ascend. Upon arrival, visitors are greeted with stunning vistas of Mangalore, the Arabian Sea, and the Western Ghats. The best times to visit are early morning or evening, to enjoy mesmerizing sunrise and sunset views.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/XRxE2hLtrVfshpbD7" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: Alwaya</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: Always</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty:Saripalla Viewpoint is a must-visit destination to escape the chaos of daily life and reconnect with nature.</p>
    </div>
  );
};

export default Saripalla;