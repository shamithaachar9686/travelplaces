/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/pages/UttaraKannada.jsx
import React from 'react';
import PlaceCard from '../components/Places/PlaceCard'; 


import Img20 from '../assets/places/ramauk.jpg';
import Img21 from '../assets/places/bhima.jpeg';
import Img22 from '../assets/places/vibhooti.jpg';
import Img23 from '../assets/places/Kavala.jpg';
import Img24 from '../assets/places/kurumgad.jpg';
import Img25 from '../assets/places/Apsarakonda.jpg';
import Img26 from '../assets/places/Backwater.jpg';
import Img27 from '../assets/places/Bhatkal.jpg';
import Img28 from '../assets/places/kd.jpg';


const UttaraKannadaPlaces= [

  {
    img: Img20,
    title: "Ramalingeshwara",
    location: "Sirsi",
    
  },
  {
    img: Img21,
    title: "Bhimanagudda",
    location: "Sirsi",
   
  },
  {
    img: Img22,
    title: "Vibhoothi",
    location: "Gokarna",
    
  },
  {
    img: Img23,
    title: "Kavala",
    location: "Dandeli",
    
  },
  {
    img: Img24,
    title: "Kurumgad",
    location: "Karwar",
    
  },
  {
    img: Img25,
    title: "Apsarkonda",
    location: "Honnavar",
    
  },
  {
    img: Img26,
    title: "Backwater",
    location: "Honnavar",
    
  },
  {
    img: Img27,
    title: "LightHouse",
    location: "Bhatkal",
    
  },
  {
    img: Img28,
    title: "Kodsalli",
    location: "Uttara Kannada",
    
  },
  
];

const UttaraKannada = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container ">
      <h1 className="heading">
          Uttara Kannada
        </h1>
        <p className='welcome-message'>Welcome to Uttara Kannada. Here are some places to visit:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {UttaraKannadaPlaces.map((item, index) => (
             <PlaceCard key={index} {...item} /> // Use PlaceCard to display place info
          ))}
        </div>
      </section>
    </div>
  );
};

export default UttaraKannada;