/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img28 from '../assets/places/kd.jpg';


const Kodsalli= () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Kodsalli</h1>
      <img src={Img28} alt="Kodsalli" className="w-auto h-48 md:h-64 mx-auto mb-4" />

      <p className="text-xl text-gray-800 font-bold">Kodasalli Dam, situated near Supa in Uttara Kannada district, Karnataka, is a notable hydroelectric dam that harnesses the power of the Kali River. This reservoir is a scenic marvel, surrounded by dense forests typical of the Western Ghats. The dam's construction has created a vast lake that serves as a source of water for irrigation, while also providing a serene backdrop for leisure activities like boating and fishing. Kodasalli Dam is a testament to Karnataka's commitment to sustainable energy and is a popular destination for nature lovers seeking tranquility amidst stunning natural landscapes.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/M9s5m4wzXLmRDecD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty: Kodasalli Dam's specialty lies in its dual role as a hydroelectric power source and a serene recreational spot amidst the Western Ghats. The dam harnesses the Kali River's flow to generate electricity while creating a picturesque reservoir surrounded by lush forests. It offers visitors opportunities for boating, fishing, and enjoying the scenic beauty, making it a favored destination for both nature enthusiasts and those interested in sustainable energy initiatives in Karnataka.</p>
    </div>
  );
};

export default Kodsalli;