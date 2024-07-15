/* eslint-disable no-unused-vars */
// ShreeLakshmiVishnumoorthyTemple.js
import React from 'react';
 import Img17 from '../assets/places/kudumari.jpg';
 import Img55 from '../assets/places/kudumari1.jpeg.jpg';
 import Img56 from '../assets/places/kudumari2.jpg';


const Kudumari = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Kudumari falls</h1>
      <div className="image-grid">
      <img src={Img17} alt="Kudumari" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img55} alt="Kudumari" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img56} alt="Kudumari" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      </div>


      <p className="text-xl text-gray-800">Kudumari Falls is in Chaktikal village in Kundapura Taluk of Udupi district in Karnataka.  The waterfall is also called Belligunndi and Chaktikal waterfall. The fall is one of the major attraction in Kundapura. The town of Kundapura is surrounded by mountain ranges giving it a picturesque grandeur. Kundapura is an ideal spot for adventure lovers to indulge in trekking, mountaineering etc.  The serene backwaters is also an ideal spot for boating.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/iJDs9GpvkikzYjnQ6" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
      <p className="text-sm text-gray-500 mt-2">Type: Temple</p>
      <p className="text-sm text-gray-500 mt-2">Opening Time: 8am</p>
      <p className="text-sm text-gray-500 mt-2">Closing Time: 5pm</p>
      <p className="text-sm text-gray-500 mt-2">Speciality:It falls between the lush greenery. The waterfall looks elegant from the distance among the greenery. The beauty truly beckons the tourists and adventure lovers.</p>


    </div>
  );
};

export default Kudumari;