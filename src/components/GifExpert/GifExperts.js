import React, { useState } from 'react';
import CategoryAdd from '../CategoryAdd/CategoryAdd';
import GifGrid from '../GifGrid/GifGrid';

const GifExperts = () => {
  const [categories, setCategories] = useState(['naruto']);

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
