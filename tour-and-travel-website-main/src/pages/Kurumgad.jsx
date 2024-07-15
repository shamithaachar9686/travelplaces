/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img24 from '../assets/places/kurumgad.jpg';


const Kurumgad = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Kurumgad Island</h1>
      <img src={Img24} alt="Kurumgad" className="w-auto h-48 md:h-64 mx-auto mb-4" />

      <p className="text-xl text-gray-800 font-bold">Kurumgad is a picturesque island located in the Arabian Sea, about 4 kilometers off the coast of Karwar in Karnataka, India. Shaped like a tortoise, this island is known for its stunning natural beauty, including pristine beaches, lush greenery, and panoramic views of the surrounding sea. It hosts the Narasimha Temple, attracting pilgrims, especially during the annual fair in January. Kurumgad is also popular for its water sports, fishing, and trekking opportunities, making it a perfect getaway for nature lovers and adventure enthusiasts.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/M9s5m4wzXLmRDecD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty: Kurumgad Island's specialty lies in its unique tortoise shape, pristine beaches, and the ancient Narasimha Temple, which draws pilgrims during its annual fair. The island offers a blend of serene natural beauty and adventure, with opportunities for water sports, fishing, and trekking, making it a distinctive destination off the coast of Karwar.</p>
    </div>
  );
};

export default Kurumgad;