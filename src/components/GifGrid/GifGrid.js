import React from 'react';
import PropTypes from 'prop-types';

import ItemGrid from '../ItemGrid/ItemGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category}</h3>

      {loading && <p className="animate__animated animate__flash"> Loading</p>}
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
