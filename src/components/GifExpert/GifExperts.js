import React, { useState } from 'react';
import CategoryAdd from '../CategoryAdd/CategoryAdd';
import GifGrid from '../GifGrid/GifGrid';

const GifExperts = ({ defaultCategory = ['naruto'] }) => {
  const [categories, setCategories] = useState(defaultCategory);

  return (
    <>
      <h1>GifExperts</h1>
      <CategoryAdd setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((item) => (
          <GifGrid key={item} category={item} />
        ))}
      </ol>
    </>
  );
};

export default GifExperts;
