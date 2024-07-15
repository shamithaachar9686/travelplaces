/* eslint-disable no-unused-vars */
// ShreeLakshmiVishnumoorthyTemple.js
import React from 'react';
 import Img16 from '../assets/places/Durga.jpg';
 import Img52 from '../assets/places/kamalashile1.jpg';
 import Img53 from '../assets/places/kamalashile3.jpeg.jpg';


const Kamalashile = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Kamalashile Durgaparameshwara Temple</h1>
      <div className="image-grid">
      <img src={Img16} alt="Kamalashile" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img52} alt="Kamalashile" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img53} alt="Kamalashile" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      </div>


      <p className="text-xl text-gray-800">

      Kamalashile is just about 35 kms from Kundapura in Udupi district. It is surrounded by high mountains and luscious evergreen forests. The river kubja flowing along its sides completes the picturesque view. The most famous attraction of Kamalashile is the ancient Sri Brahmi Durgaparameshwari temple. It is located right at the centre of the village. Kamalashile is named after a stone Linga and has an interesting story associated with it. It is Goddess Sri Brahmi Durga Durgaparameshwari who is worshipped in the form of Linga. The Linga is also known to be a combination and convergence of two eternal powers of Goddesses Mahakali and Maha Lakshmi.</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/HC9MY3MLpoSVhVAY7" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
      <p className="text-sm text-gray-500 mt-2">Type: Temple</p>
      <p className="text-sm text-gray-500 mt-2">Opening Time: 6am</p>
      <p className="text-sm text-gray-500 mt-2">Closing Time: 8pm</p>
      <p className="text-sm text-gray-500 mt-2">Speciality: Kamalashile is known for Sri Bramhi Durga Parameshwari temple. It is an ancient temple and frequent Chandi Homa/Yagna are conducted here. Kamalashile jathre is celebrated annually in April.</p>


    </div>
  );
};

export default Kamalashile;