/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img9 from '../assets/places/sh.jpg';
import Img65 from '../assets/places/shishileshwara1.jpg';
import Img66 from '../assets/places/shishileshwara2.jpg';
import './styles.css';


const Shishileshwara= () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shishileshwara Temple</h1>
      <div className="image-grid">
      
      <img src={Img9} alt="Shishileshwara" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img65} alt="Shishileshwara" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img66} alt="Shishileshwara" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      </div>

      <p className="text-xl text-gray-800 font-bold">Shishila is a picturesque village located about 32 kilometers from Dharmasthala in the Dakshina Kannada district of Karnataka. It is renowned for its ancient Shiva Temple, featuring an Udbhava Linga, a self-manifested Shiva idol. Nestled on the banks of the serene Kapila River, which later merges with the Netravati River, Shishila is also known as Matsya Theertha due to the abundant sacred Mahashir (Peruvelu in Tulu) fish in the river.
      </p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/AEPJEZ4nBsZGoK9Y7" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty:he village celebrates an annual nine-day festival at the end of May, with each day featuring unique rituals and celebrations. The main deity of the temple is Sri Shishileshwara, accompanied by idols of Sri Durga and Mahaganapati.</p>
    </div>
  );
};

export default Shishileshwara;