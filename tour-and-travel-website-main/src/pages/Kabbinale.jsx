/* eslint-disable no-unused-vars */
// ShreeLakshmiVishnumoorthyTemple.js
import React from 'react';
 import Img18 from '../assets/places/Kabbinale.jpg';
 import Img57 from '../assets/places/kabbinale1.jpg';
 import Img58 from '../assets/places/kabbinale2.jpeg.jpg';


const Kabbinale = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Kabbinale Falls</h1>
      <div className="image-grid">
      <img src={Img18} alt="Kabbinale" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img57} alt="Kabbinale" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img58} alt="Kabbinale" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      </div>


      <p className="text-xl text-gray-800">Kabbinaale Falls is a tourist attraction located in Machattu Proper, Karnataka. The average rating of this place is 4.60 out of 5 stars based on 60 reviews. The street address of this place is M289+89P, Machattu Proper, Karnataka 577448, India. It is about 19.20 kilometers away from the Nittur railway station.Kabbinale Falls is nestled amidst lush greenery and is a popular spot for nature lovers and adventurers alike. The falls cascade down from a height, creating a refreshing atmosphere that attracts visitors seeking tranquility and scenic beauty. The surrounding area is rich in biodiversity, adding to the charm of the waterfall experience</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/erACRew2B19zfprZ8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
      <p className="text-sm text-gray-500 mt-2">Type: Temple</p>
      <p className="text-sm text-gray-500 mt-2">Opening Time: 9am</p>
      <p className="text-sm text-gray-500 mt-2">Closing Time: 3pm</p>
      <p className="text-sm text-gray-500 mt-2">Speciality:The specialty of Kabbinale Falls in Udupi lies in its serene and natural beauty. Nestled amidst lush greenery and pristine surroundings, Kabbinale Falls offers a tranquil escape for nature lovers and adventurers alike. The falls cascade down in multiple tiers, creating a picturesque sight that attracts visitors seeking a peaceful retreat in the lap of nature.</p>


    </div>
  );
};

export default Kabbinale;