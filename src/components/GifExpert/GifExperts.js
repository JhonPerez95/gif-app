import React, { useState } from 'react';
import CategoryAdd from '../CategoryAdd/CategoryAdd';
import GifGrid from '../GifGrid/GifGrid';

const GifExperts = () => {
  const [categories, setCategories] = useState(['naruto']);

  const handlerAdd = () => {
    setCategories([...categories, 'Bleach']);
  };

  return (
    <>
      <h1>GifExperts</h1>
      <CategoryAdd setCategories={setCategories} />
      <hr />
      <button onClick={handlerAdd}>Add Anime</button>
      <ol>
        {categories.map((item) => (
          <GifGrid key={item} category={item} />
        ))}
      </ol>
    </>
  );
};

export default GifExperts;
