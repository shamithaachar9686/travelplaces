// src/pages/Udupi.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import PlaceCard from "../components/Places/PlaceCard";
import Img10 from "../assets/places/A4.jpg";
import Img11 from "../assets/places/up.jpg";
import Img12 from "../assets/places/g.jpg";
import Img13 from "../assets/places/Kolankal.jpg";
import Img14 from "../assets/places/mg.jpg";
import Img15 from "../assets/places/mar1.jpg";
import Img16 from "../assets/places/kamalashile3.jpeg.jpg";
import Img17 from "../assets/places/kudumari.jpg";
import Img18 from "../assets/places/Kabbinale.jpg";
import './Udupi.css'; 

const Udupi = () => {
  const UdupiPlaces = [
    {
      img: Img10,
      title: "Anjaneya",
      location: "Udupi",
    },
    {
      img: Img11,
      title: "UppinaKudru",
      location: "Udupi",
    },
    {
      img: Img12,
      title: "Guddattu",
      location: "Udupi",
    },
    {
      img: Img13,
      title: "Kolankal",
      location: "Udupi",
    },
    {
      img: Img14,
      title: "Moodgal",
      location: "Udupi",
    },
    {
      img: Img15,
      title: "Maranakatte",
      location: "Udupi",
    },
    {
      img: Img16,
      title: "Kamalashile",
      location: "Udupi",
    },
    {
      img: Img17,
      title: "Kudumari",
      location: "Udupi",
    },
    {
      img: Img18,
      title: "Kabbinale",
      location: "Udupi",
    },
  ];
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container ">
      <h1 className="heading">
          Udupi
        </h1>
        <p className="welcome-message">Welcome to Udupi</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {UdupiPlaces.map((item, index) => (
            <PlaceCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Udupi;
