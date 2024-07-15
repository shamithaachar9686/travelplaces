/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img22 from '../assets/places/vibhooti.jpg';


const Vibhoothi= () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Vibhoothi Falls</h1>
      <img src={Img22} alt="Vibhoothi" className="w-auto h-48 md:h-64 mx-auto mb-4" />

      <p className="text-xl text-gray-800 font-bold">Vibhooti Falls, near Sirsi in Karnataka's Uttara Kannada district, is a beautiful multi-tiered waterfall nestled in the lush forests of the Western Ghats. The falls are fed by a perennial stream, creating a refreshing natural pool at the base, perfect for swimming. Accessible via a short, easy trek, the falls are about 50 kilometers from Sirsi and are best visited during the monsoon or post-monsoon seasons. The serene surroundings, ideal for photography, picnicking, and nature walks, make Vibhooti Falls a must-visit for nature enthusiasts. Nearby attractions include the unique Yana Rocks and the dramatic Unchalli Falls.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/M9s5m4wzXLmRDecD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty:Vibhooti Falls is renowned for its multi-tiered cascades set amidst the lush Western Ghats, offering a serene natural pool and picturesque surroundings accessible via a short trek. Its perennial water flow and proximity to attractions like Yana Rocks and Unchalli Falls make it a unique and captivating destination for nature enthusiasts.</p>
    </div>
  );
};

export default Vibhoothi;