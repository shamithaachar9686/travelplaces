/* eslint-disable no-unused-vars */
// PlaceDetail.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Img10 from '../assets/places/dk1.jpg';
// import Img11 from '../assets/places/subramanyadk2.jpg';
// import Img12 from '../assets/places/koiladk3.jpg';

// const places = [
//   {
//     img: Img10,
//     title: "Shree Lakshmi Vishnumoorthy Temple",
//     location: "Dakshina Kannada",
//     description: "Shree Lakshmi Vishnumoorthy Temple in Dakshina Kannada is a revered Hindu temple dedicated to Lord Vishnu and Goddess Lakshmi. Known for its divine ambiance and traditional architecture, the temple is a significant pilgrimage site offering spiritual solace and a peaceful retreat for devotees. The lush surroundings add to its charm, making it a noteworthy destination in the region.",
//     type: "Cultural Relax",
//   },
//   {
//     img: Img11,
//     title: "Subramanyeshwara Temple",
//     location: "Dakshina Kannada",
//     description: "Subramanya Temple, also known as Subramanyeshwara Temple, is a revered Hindu shrine dedicated to Lord Subramanya, the son of Lord Shiva and Parvati. Located in various parts of India, such as Karnataka and Tamil Nadu, these temples attract devotees who seek blessings for courage, wisdom, and victory over obstacles in life. The architecture often features intricate carvings and sculptures depicting mythological stories associated with Lord Subramanya.",
//     type: "Cultural Relax",
//   },
//   {
//     img: Img12,
//     title: "Koila Farm",
//     location: "Dakshina Kannada",
//     description: "Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region.",
//     type: "Cultural Relax",
//   },
// ];

// const PlaceDetail = () => {
//   const { title } = useParams();
//   const place = places.find(p => p.title === decodeURIComponent(title));

//   if (!place) {
//     return <div>Place not found</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{place.title}</h1>
//       <img src={place.img} alt={place.title} className="w-full h-64 object-cover mb-4" />
//       <p className="text-xl text-gray-800">{place.description}</p>
//       <p className="text-md text-gray-600 mt-2">{place.location}</p>
//       <p className="text-sm text-gray-500 mt-2">{place.type}</p>
//     </div>
//   );
// };

// export default PlaceDetail;
// above my code
import React from 'react';
import { useParams } from 'react-router-dom';
import Img1 from '../assets/places/dk1.jpg';
import Img2 from '../assets/places/subramanyadk2.jpg';
import Img3 from '../assets/places/koiladk3.jpg';
import Img4 from '../assets/places/Narahari.jpg';
import Img5 from '../assets/places/Bolle.jpg';
import Img6 from '../assets/places/gadaikallu.jpg';
import Img7 from '../assets/places/Anadka.jpg';
import Img8 from '../assets/places/saripalla.jpg';
import Img9 from '../assets/places/sh.jpg';
import Img10 from '../assets/places/Anjaneya.jpg';
import Img11 from '../assets/places/up.jpg';
import Img12 from '../assets/places/g.jpg';
import Img13 from '../assets/places/Kolankal.jpg';
import Img14 from '../assets/places/mg.jpg';
import Img15 from '../assets/places/Brahmalinga.jpg';
import Img16 from '../assets/places/Durga.jpg';
import Img17 from '../assets/places/kudumari.jpg';
import Img18 from '../assets/places/Kabbinale.jpg';
import Img20 from '../assets/places/ramauk.jpg';
import Img21 from '../assets/places/bhima.jpeg';
import Img22 from '../assets/places/vibhooti.jpg';
import Img23 from '../assets/places/Kavala.jpg';
import Img24 from '../assets/places/kurumgad.jpg';
import Img25 from '../assets/places/Apsarakonda.jpg';
import Img26 from '../assets/places/Backwater.jpg';
import Img27 from '../assets/places/Bhatkal.jpg';
import Img28 from '../assets/places/kd.jpg';

const places = [
  {
    img: Img1,
    title: "Shree Lakshmi Vishnumoorthy Temple",
    location: "Dakshina Kannada",
    description: "Shree Lakshmi Vishnumoorthy Temple in Dakshina Kannada is a revered Hindu temple dedicated to Lord Vishnu and Goddess Lakshmi. Known for its divine ambiance and traditional architecture, the temple is a significant pilgrimage site offering spiritual solace and a peaceful retreat for devotees. The lush surroundings add to its charm, making it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Subramanyeshwara Temple",
    location: "Dakshina Kannada",
    description: "Subramanya Temple, also known as Subramanyeshwara Temple, is a revered Hindu shrine dedicated to Lord Subramanya, the son of Lord Shiva and Parvati. Located in various parts of India, such as Karnataka and Tamil Nadu, these temples attract devotees who seek blessings for courage, wisdom, and victory over obstacles in life. The architecture often features intricate carvings and sculptures depicting mythological stories associated with Lord Subramanya.",
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Koila Farm",
    location: "Dakshina Kannada",
    description: "Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "CanaraViewpoint",
    location: "Dakshina Kannada",
    description: "Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Bolle",
    location: "Dakshina Kannada",
    description: "Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Gadaikallu",
    location: "Dakshina Kannada",
    description: "Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img7,
    title: "Anadka",
    location: "Dakshina Kannada",
    description: "Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img8,
    title: "Saripalla",
    location: "Dakshina Kannada",
    description: "Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img9,
    title: "Shishileshwara",
    location: "Dakshina Kannada",
    description: "Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region.",
    type: "Cultural Relax",
  },
  
  {
    img: Img10,
    title: "Anjaneya",
    location: "Udupi",
    description: "Guddattu located in Kundapur which covered full of cave.",
    type: "Cultural Relax",
  },
  
  {
    img: Img11,
    title: "Uppinakudru",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img12,
    title: "Guddattu",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img13,
    title: "Kolankal",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img14,
    title: "Moodgal",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img15,
    title: "Maranakatte",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img16,
    title: "Kamalashile",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img17,
    title: "Kudumari",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img18,
    title: "Kabbinale",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img20,
    title: "Ramalingeshwara",
    location: "Uttarakannada",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img21,
    title: "Bhimangudda",
    location: "Uttarakannada",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img22,
    title: "Vibhoothi",
    location: "Uttarakannada",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img23,
    title: "Kavala",
    location: "Uttarakannada",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img24,
    title: "Kurumgad",
    location: "Uttarakannada",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img25,
    title: "Apsarkonda",
    location: "Uttarakannada",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img26,
    title: "Backwater",
    location: "Uttarakannada",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img27,
    title: "LightHouse",
    location: "Uttarakannada",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img28,
    title:"Kodsalli",
    location: "Uttarakannada",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
];

const PlaceDetail = () => {
  const { title } = useParams();
  const place = places.find(p => p.title === decodeURIComponent(title));

  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{place.title}</h1>
      <img src={place.img} alt={place.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-xl text-gray-800">{place.description}</p>
      <p className="text-md text-gray-600 mt-2">{place.location}</p>
     

    </div>
  );
};

export default PlaceDetail;

