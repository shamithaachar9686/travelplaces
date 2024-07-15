/* eslint-disable no-unused-vars */
// ShreeLakshmiVishnumoorthyTemple.js
import React from 'react';
 import Img15 from '../assets/places/Brahmalinga.jpg';
 import Img50 from '../assets/places/mar3.jpg';
 import Img51 from '../assets/places/mar2.jpg';


const Maranakatte = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Maranakatte Brahmalingeshwara Temple</h1>
      <div className="image-grid">
      <img src={Img50} alt="Maranakatte" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img51} alt="Maranakatte" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img15} alt="Maranakatte" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      </div>


      <p className="text-xl text-gray-800">Maranakatte Bhramalingeshwara Temple is a revered Hindu temple located in Maranakatte, near Kundapura in Karnataka, India. Dedicated to Lord Shiva, the temple is famous for its ancient architecture and spiritual significance. It is believed to have been established centuries ago and holds a prominent place in local mythology and religious practices.

The temple is known for its intricate carvings and sculptures, depicting various mythological stories and motifs. It attracts devotees from far and wide who come to seek blessings and offer prayers to Lord Shiva, known here as Bhramalingeshwara. The serene surroundings and spiritual ambiance make Maranakatte Bhramalingeshwara Temple a tranquil place for meditation and reflection. The temple also hosts annual festivals and religious ceremonies, adding to its cultural vibrancy and importance in the region..</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/oz46fPKQXianrCsj8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
      <p className="text-sm text-gray-500 mt-2">Type: Temple</p>
      <p className="text-sm text-gray-500 mt-2">Opening Time: 7am</p>
      <p className="text-sm text-gray-500 mt-2">Closing Time: 8pm</p>
      <p className="text-sm text-gray-500 mt-2">Speciality:Maranakatte Bhramalingeshwara Temple is especially renowned for its ancient Shiva linga (known as Bhramalingeshwara), which is believed to possess powerful spiritual energy. The temple's serene location amidst lush greenery adds to its spiritual appeal, providing devotees and visitors with a tranquil environment for prayer and meditation. The intricate carvings and architecture of the temple showcase traditional craftsmanship and depict mythological tales, enriching the cultural experience for those who visit. The temple's annual festivals and religious rituals further highlight its significance as a center of worship and cultural heritage in the Kundapura region of Karnataka.</p>


    </div>
  );
};

export default Maranakatte;