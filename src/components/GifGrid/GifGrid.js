import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemGrid from '../ItemGrid/ItemGrid';
import getGif from '../../helpers/getGifs';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif(category).then((res) => setImages(res));
  }, [category]);
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
