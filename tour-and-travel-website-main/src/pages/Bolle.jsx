/* eslint-disable no-unused-vars */
// KoilaFarm.js
import React from 'react';
import Img5 from '../assets/places/Bolle.jpg';
import Img63 from '../assets/places/bolle2.jpeg.jpg';
import Img64 from '../assets/places/bolle3.jpg';


const Bolle = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bolle Falls</h1>
      <div className="image-grid">
      <img src={Img5} alt="Bolle" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img63} alt="Bolle" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      <img src={Img64} alt="Bolle" className="w-auto h-48 md:h-64 mx-auto mb-4" />
      </div>

      <p className="text-xl text-gray-800 font-bold">The heavenly sight of cascading Bolle waterfalls nestled within the forest in Belthangady taluk. a visit to the breathtaking waterfalls in Belthangady combines the twin pleasures of trekking and a relaxing picnic admist cold-black rocks.
watching the waters cascading from a height of 95feet is itself a sheer joy, vouch trekkers who have paid a visit to the water falls.
The waterfalls is a good 2.5km -trek from Bolle mane,which is around six to seven kilometers from Belthangady.
</p>
      <p className="text-md text-gray-600 mt-2 font-bold">
        Location: <a href="https://g.co/kgs/8MgifCS" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://maps.app.goo.gl/W8Ksn7aSjCAAaugT7</a>
      </p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Type: Tourist Place</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Opening Time: 7am</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Closing Time: 8pm</p>
  <p className="text-sm text-gray-500 mt-2 font-bold">Specialty: the river is fed by small tributaries, the waterfalls thins only during peak summer say trekkers well-acquainted with the waterfall.Away from hustle and bustle , the solitude is broken only by chirping of birds leaving the visitors with a blissful feeling.</p>
    </div>
  );
};

export default Bolle;