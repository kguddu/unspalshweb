import React, { useState, useEffect } from 'react';
import './UnsplashGallery.css';

const UnsplashGallery = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=2Nseqr8sC8TTY-zreFw-C62GVfmaINxs-T8_qCmDLcU`
        );
        const data = await response.json();
        setImages(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='container'>
        <div className='header'>
        <h1>Unsplash Gallery</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for images"
        className="search-input"
      />
      </div>
      <div className="image-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className="image"
          />
        ))}
      </div>
    </div>
  );
};

export default UnsplashGallery;
