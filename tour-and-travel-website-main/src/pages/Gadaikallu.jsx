/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img6 from '../assets/places/gadaikallu.jpg';
import Img36 from '../assets/places/gad1.jpg';

import Img37 from '../assets/places/gad2.jpg';
import './styles.css';


const Gadaikallu = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gadaikallu Hills</h1>
      <div className="image-grid">
      <img src={Img6} alt="Gadaikallu" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img36} alt="Gadaikallu" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img37} alt="Gadaikallu" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      </div>

      <p className="text-xl text-gray-800 font-bold">Gadaikallu, also known as Jamalabad Fort, is a prominent hill located near Belthangady, about 70 km from Mangalore, Karnataka. The hill stands at an elevation of 1700 feet and is renowned for its historical fort built by Tipu Sultan in 1794, named after his mother, Jamalabee.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/uPdHsT4taecU5WCZA" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: Always</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: Always</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty:Gadaikallu combines natural beauty, historical significance, and a rigorous trekking experience, making it a unique destination in Karnataka.</p>
    </div>
  );
};

export default Gadaikallu;