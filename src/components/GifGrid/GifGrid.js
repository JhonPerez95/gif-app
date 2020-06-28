import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemGrid from '../ItemGrid/ItemGrid';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getGif = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=Naruto&limit=10&api_key=9yYinLKzHxLHb3dW9bp84743eJHjb5sc';
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        url: item.images?.downsized_medium.url,
      };
    });
    setImages(gifs);
    // console.log(gifs);
  };

  useEffect(() => {
    getGif();
  }, []);
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((item) => (
          <ItemGrid key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
