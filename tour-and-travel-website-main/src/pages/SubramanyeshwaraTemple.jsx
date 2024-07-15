/* eslint-disable no-unused-vars */
// SubramanyeshwaraTemple.js
/* eslint-disable no-unused-vars */
// SubramanyeshwaraTemple.js
import React from 'react';
import Img2 from '../assets/places/subramanyadk2.jpg';
import Img74 from '../assets/places/su1.jpg';
import Img75 from '../assets/places/su2.jpg';
import './styles.css';


const SubramanyeshwaraTemple = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Subramanyeshwara Temple</h1>
      <div className="image-grid">
      <img src={Img2} alt="Subramanyeshwara Temple" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img74} alt="Subramanyeshwara Temple" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img75} alt="Subramanyeshwara Temple" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      </div>
      <p className="text-xl text-gray-800 mt-2 font-bold">Subramanya Temple, also known as Subramanyeshwara Temple, is a revered Hindu shrine dedicated to Lord Subramanya, the son of Lord Shiva and Parvati. Located in various parts of India, such as Karnataka and Tamil Nadu, these temples attract devotees who seek blessings for courage, wisdom, and victory over obstacles in life. The architecture often features intricate carvings and sculptures depicting mythological stories associated with Lord Subramanya.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
      <p className="text-sm text-gray-500 mt-2 font-bold">Type: Cultural Relax</p>
      <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty: Every Year there will be a Carnival</p>
    </div>
  );
};

export default SubramanyeshwaraTemple;