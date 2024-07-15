// /* eslint-disable no-unused-vars */
// // ShreeLakshmiVishnumoorthyTemple.js
// import React from 'react';
// import Img1 from '../assets/places/ss1.jpg';

// const ShreeLakshmiVishnumoorthyTemple = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Shree Lakshmi Vishnumoorthy Temple</h1>
//       <img src={Img1} alt="Shree Lakshmi Vishnumoorthy Temple" className="w-full h-64 object-cover mb-4" />
//       <p className="text-xl text-gray-800">Shree Lakshmi Vishnumoorthy Temple in Dakshina Kannada is a revered Hindu temple dedicated to Lord Vishnu and Goddess Lakshmi. Known for its divine ambiance and traditional architecture, the temple is a significant pilgrimage site offering spiritual solace and a peaceful retreat for devotees. The lush surroundings add to its charm, making it a noteworthy destination in the region.</p>
//       <p className="text-md text-gray-600 mt-2">Location: Dakshina Kannada</p>
//       <p className="text-sm text-gray-500 mt-2">Type: Cultural Relax</p>
//       <p className="text-sm text-gray-500 mt-2">opening: 5</p>
      
//     </div>
//   );
// };

// export default ShreeLakshmiVishnumoorthyTemple;
/* eslint-disable no-unused-vars */
// ShreeLakshmiVishnumoorthyTemple.js
import React from 'react';
import Img1 from '../assets/places/dk1.jpg';
import Img30 from '../assets/places/v1.jpg';
import Img31 from '../assets/places/v2.jpg';
import './styles.css';


const ShreeLakshmiVishnumoorthyTemple = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-bold mb-4">Shree Lakshmi Vishnumoorthy Temple</h1> */}
      <h1 className="heading">Shree Lakshmi Vishnumoorthy Temple</h1>
      <div className="image-grid">
      <img src={Img1} alt="Shree Lakshmi Vishnumoorthy Temple" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img30} alt="Shree Lakshmi Vishnumoorthy Temple" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img31} alt="Shree Lakshmi Vishnumoorthy Temple" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      </div>


      <p className="text-xl font-bold">Shree Lakshmi Vishnumoorthy Temple in Dakshina Kannada is a revered Hindu temple dedicated to Lord Vishnu and Goddess Lakshmi. Known for its divine ambiance and traditional architecture, the temple is a significant pilgrimage site offering spiritual solace and a peaceful retreat for devotees. The lush surroundings add to its charm, making it a noteworthy destination in the region.</p>
      <p className="text-md font-bold">
        Location: <a href="https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm">Type: Cultural Relax</p>
  <p className="text-sm">Opening Time: 7am</p>
  <p className="text-sm">Closing Time: 8pm</p>
  <p className="text-sm">Specialty: Every Year there will be a Carnival</p>

``

    </div>
  );
};

export default ShreeLakshmiVishnumoorthyTemple;