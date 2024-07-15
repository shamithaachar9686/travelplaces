/* eslint-disable no-unused-vars */
import React from 'react';
 import Img13 from '../assets/places/Kolankal.jpg';
 import Img46 from '../assets/places/kolankal2.jpg';
 import Img47 from '../assets/places/kolanka4.jpg';
 import './pages.css'

const Guddattu = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Kolankal Temple</h1>
      <div className="image-grid">
      <img src={Img13} alt="Kolankal" className="w-auto h-48 md:h-64 mx-auto mb-4" /> 
      <img src={Img46} alt="Kolankal" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img47} alt="Kolankal" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      </div>


      <p className="text-xl text-gray-800">Kolankal is a quaint and picturesque village located near Kundapura in the Udupi district of Karnataka, India. Known for its serene landscapes and lush greenery, Kolankal offers a peaceful retreat from bustling city life. The village is characterized by its traditional homes, agricultural fields, and proximity to nature, making it a perfect spot for those seeking tranquility and a glimpse into rural life in Karnataka. Kolankal is also near several cultural and historical sites, adding to its charm as a quiet yet culturally rich destination</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://maps.app.goo.gl/JUF2rvzswiTTYJT77" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
      <p className="text-sm text-gray-500 mt-2">Type: Temple</p>
      <p className="text-sm text-gray-500 mt-2">Opening Time: 8am</p>
      <p className="text-sm text-gray-500 mt-2">Closing Time: 6pm</p>
      <p className="text-sm text-gray-500 mt-2">Speciality:Kolankal is especially known for its tranquil rural setting and lush greenery, offering a serene escape into nature. The village's traditional lifestyle, agricultural fields, and close-knit community provide an authentic experience of rural life in Karnataka. Its proximity to cultural and historical sites further enhances its appeal, making Kolankal a unique destination for peace and cultural exploration.</p>


    </div>
  );
};

export default Guddattu;