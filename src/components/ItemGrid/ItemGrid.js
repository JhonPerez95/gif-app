import React from 'react';
import PropTypes from 'prop-types';

const ItemGrid = ({ id, title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

ItemGrid.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ItemGrid;
