import React, { useState } from 'react';
import CategoryAdd from '../CategoryAdd/CategoryAdd';

const GifExperts = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Naruto',
    'Dragon ball',
  ]);

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
          <li key={item}>{item}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExperts;
