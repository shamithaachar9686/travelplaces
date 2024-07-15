/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './SuggestUsButton.css';

const SuggestUs = () => {
  const [placeName, setPlaceName] = useState('');
  const [location, setLocation] = useState('');
  const [placeType, setPlaceType] = useState('');
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState('');

  const handlePhotoChange = (e) => {
    setPhotos([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Place: ${placeName}, Location: ${location}, Type: ${placeType}`);
    // Here you would typically handle the form submission, e.g., sending data to a server
    setPlaceName('');
    setLocation('');
    setPlaceType('');
    setPhotos([]);
    setDescription('');
  };

  return (
    <div className="container pt-14">
      <div className="py-10">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Suggest Us
        </h1>
      </div>
      <div className="suggest-us-form">
        <h2>Suggest a Place</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Place Name:
            <input
              type="text"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
              required
            />
          </label>
          <label>
            Type of Place:
            <select
              value={placeType}
              onChange={(e) => setPlaceType(e.target.value)}
              required
            >
              <option value="">Select Type</option>
              <option value="Historical">Historical</option>
              <option value="Nature">Nature</option>
              <option value="Beach">Beach</option>
              <option value="Temple">Temple</option>
              <option value="Adventure">Adventure</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Location (link):
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <label>
            Photos:
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
            />
          </label>
          <label>
            Description (optional):
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <br/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SuggestUs;
