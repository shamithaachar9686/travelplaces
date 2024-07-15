/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Places/PlaceCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlaceCard = ({ img, title, location, description, type, opening }) => {
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate(`/place/${encodeURIComponent(title)}`);
  };

  return (
    <div className="place-card border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img src={img} alt={title} className="place-card-img w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{location}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-400">{description}</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{type}</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{opening}</p>
        <button
          onClick={handleMoreInfoClick}
          className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
        >
          More Information
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
