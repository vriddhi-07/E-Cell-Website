// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <img src="path_to_image" alt="Event 1" />
        <img src="path_to_image" alt="Event 2" />
        <img src="path_to_image" alt="Event 3" />
        {/* Add more images */}
      </div>
    </div>
  );
};

export default Gallery;
