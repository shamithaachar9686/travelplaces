/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img25 from '../assets/places/Apsarakonda.jpg';


const Apsarkonda = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Apsarakonda</h1>
      <img src={Img25} alt="Apsarkonda" className="w-auto h-48 md:h-64 mx-auto mb-4" />

      <p className="text-xl text-gray-800 font-bold">Apsarakonda, located near Honnavar in Karnataka, is renowned for its picturesque waterfall cascading into a serene pool surrounded by lush greenery. According to local folklore, the site derives its name from celestial nymphs who were believed to visit the waterfall, adding a mystical charm to its natural beauty. The area also offers stunning viewpoints overlooking the Arabian Sea and a secluded beach, making it a delightful destination for relaxation and exploration of coastal Karnataka's biodiversity.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/M9s5m4wzXLmRDecD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty: Apsarakonda's specialty lies in its tranquil waterfall that descends into a serene pool amidst lush green surroundings, coupled with its mythological significance tied to celestial nymphs. The site also features panoramic views of the Arabian Sea and a secluded beach, offering visitors a unique blend of natural beauty, spiritual resonance, and peaceful coastal charm.</p>
    </div>
  );
};

export default Apsarkonda;