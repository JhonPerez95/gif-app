import React, { useState } from 'react';

const CategoryAdd = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('Bleach');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((category) => [...category, inputValue]);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

export default CategoryAdd;
