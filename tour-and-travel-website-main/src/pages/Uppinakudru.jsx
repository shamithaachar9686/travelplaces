/* eslint-disable no-unused-vars */
// ShreeLakshmiVishnumoorthyTemple.js
import React from 'react';
 import Img11 from '../assets/places/up.jpg';
 import Img42 from '../assets/places/up1.jpg';
 import Img43 from '../assets/places/up2.jpg';


const Uppinakudru = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Uppinakudru Island</h1>
      <div className="image-grid">
      <img src={Img11} alt="Shree Lakshmi Vishnumoorthy Temple" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img42} alt="Shree Lakshmi Vishnumoorthy Temple" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img43} alt="Shree Lakshmi Vishnumoorthy Temple" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      </div>


      <p className="text-xl text-gray-800">Uppinakudru, located near Kundapura in Karnataka, India, is a picturesque island village known for its rich cultural heritage and scenic beauty. Historically, Uppinakudru was a prominent center for salt trading and is now famous for its traditional Yakshagana puppetry, a unique form of shadow play that narrates epic tales from Indian mythology. The village is surrounded by the tranquil backwaters of the Arabian Sea, offering stunning views and a peaceful retreat for visitors. Uppinakudru is also home to several ancient temples, adding to its cultural and spiritual significance..</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/B1xRknGYsLerFdaZ7" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
      <p className="text-sm text-gray-500 mt-2">Type: Temple</p>
      <p className="text-sm text-gray-500 mt-2">Opening Time: 8am</p>
      <p className="text-sm text-gray-500 mt-2">Closing Time: 6pm</p>
      <p className="text-sm text-gray-500 mt-2">Speciality:Uppinakudru is renowned for its unique tradition of Yakshagana puppetry, a vibrant and intricate shadow play that tells stories from Indian mythology. This island village, once a hub for salt trading, captivates visitors with its serene backwaters and rich cultural heritage, making it a significant cultural and scenic destination in Karnataka.</p>


    </div>
  );
};

export default Uppinakudru;