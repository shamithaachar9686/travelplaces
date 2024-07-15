/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img23 from '../assets/places/Kavala.jpg';


const Kavala = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Kavala caves</h1>
      <img src={Img23} alt="Kavala" className="w-auto h-48 md:h-64 mx-auto mb-4" />

      <p className="text-xl text-gray-800 font-bold">Kavala Caves, located near Dandeli in Karnataka, are ancient limestone caves formed naturally over millions of years. Known for their stunning stalactite and stalagmite formations, these caves are a significant attraction within the Dandeli Wildlife Sanctuary. A highlight of the caves is the naturally formed Shiva Linga, which draws numerous pilgrims and tourists. Accessible by descending around 375 steps, the journey to the caves also offers opportunities to witness the rich flora and fauna of the sanctuary. The caves' mystical ambiance and geological marvels make them a must-visit destination for adventurers and spiritual seekers alike.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/M9s5m4wzXLmRDecD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty: Kavala Caves' specialty lies in their ancient limestone formations, including a naturally formed Shiva Linga, set within the Dandeli Wildlife Sanctuary. The caves' unique geological features and spiritual significance, combined with a scenic descent through rich flora and fauna, make them a captivating destination for both adventurers and pilgrims.</p>
    </div>
  );
};

export default Kavala;