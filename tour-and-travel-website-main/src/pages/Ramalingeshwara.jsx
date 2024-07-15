/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img20 from '../assets/places/ramauk.jpg';


const Ramalingeshwara = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Ramalingeshwara Temple</h1>
      <img src={Img20} alt="Ramalingeshwara" className="w-auto h-48 md:h-64 mx-auto mb-4" />

      <p className="text-xl text-gray-800 font-bold">Ramalingeshwara Temple in Sirsi is more than just a historical site; it is a hidden treasure waiting to be discovered. Tucked away from the usual tourist routes, this temple offers a serene and authentic experience. Its intricate carvings and rich history remain largely unexplored, making it a captivating destination for those seeking off-beat adventures and a deeper connection with India's cultural heritage.

Immerse yourself in the temple's tranquil atmosphere and uncover the stories etched in stone.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/M9s5m4wzXLmRDecD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Historical Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty: A unique aspect of Ramalingeshwara Temple is the special Monday pooja dedicated to devotees. Every Monday, worshippers can contribute items for the ritual and have their names included in the sacred ceremony. This personalized devotion fosters a deep spiritual connection between the devotees and the divine.</p>
    </div>
  );
};

export default Ramalingeshwara;