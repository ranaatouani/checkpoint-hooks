import React from 'react';

const Filter = ({ onFilterChange }) => {
  const handleTitleChange = (event) => {
    onFilterChange({ title: event.target.value });
  };

  const handleRatingChange = (event) => {
    onFilterChange({ rating: parseFloat(event.target.value) });
  };

  return (
    <div className="filter">
      <input type="text" placeholder="Title" onChange={handleTitleChange} />
      <input type="number" placeholder="Rating" onChange={handleRatingChange} />
    </div>
  );
};

export default Filter;
