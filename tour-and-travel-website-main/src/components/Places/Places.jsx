/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Place from "../../components/Places/Place";
import Img1 from "../../assets/places/A1.jpg";
import Img2 from "../../assets/places/kudumari2.jpg";
import Img3 from "../../assets/places/didupe2.jpg";
import Img4 from "../../assets/places/up5.jpg";
import Img6 from "../../assets/places/vibhooti.jpg";
import Img7 from "../../assets/places/bk1.jpg";
import Img8 from "../../assets/places/h1.jpg";
import Img9 from "../../assets/places/bk2.jpg";
import Img10 from "../../assets/places/sathodi.jpg";
import Img11 from "../../assets/places/o1.jpg";
import Img12 from "../../assets/places/G9.jpg";
import Img13 from "../../assets/places/t1.jpg";
import { useInView } from 'react-intersection-observer';

const PlacesData = [
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img7 },
  { img: Img4 },
  { img: Img6 },
  { img: Img8 },
  { img: Img9 },
  { img: Img10 },
  { img: Img11 },
  { img: Img12 },
  { img: Img13 },
];

const Places = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container mx-auto px-4">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlaceWithAnimation key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

const PlaceWithAnimation = ({ img }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`transition-transform duration-500 ${inView ? 'transform scale-100' : 'transform scale-75'}`}>
      <Place img={img} />
    </div>
  );
};

export default Places;
