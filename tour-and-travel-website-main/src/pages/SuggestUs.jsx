/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './SuggestUsButton.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SuggestUs() {
  const [placeName, setPlaceName] = useState('');
  const [location, setLocation] = useState('');
  const [placeType, setPlaceType] = useState('');
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    setPhotos([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('placeName', placeName);
    formData.append('location', location);
    formData.append('placeType', placeType);
    formData.append('description', description);
    photos.forEach((photo) => {
      formData.append('photos', photo);
    });

    axios.post('http://localhost:3001/suggestus', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(result => {
      console.log(result);
      alert("Thank you for the new place.");
      navigate('/');
    })
    .catch(err => console.log(err));

    setPlaceName('');
    setLocation('');
    setPlaceType('');
    setPhotos([]);
    setDescription('');
  };

  return (
    <div className="container pt-14">
      <div className="py-10">
        <h2 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
        Share your favorite spots and let the adventure begin! Enter your known place and unlock hidden gems
        </h2>
      </div>
      <div className="suggest-us-form">
        <h1>Suggest a Place</h1>
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
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SuggestUs;
