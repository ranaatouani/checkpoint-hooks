import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Description for Movie 1',
      posterURL: 'url-to-movie1-poster',
      rating: 4.5
    },
    {
      title: 'Movie 2',
      description: 'hhhhhhhhhhhhhhh',
      posterURL: 'url-to-movie1-poster',
      rating: 7
    },
    // Add more initial movies here
  ]);

  const [filteredMovies, setFilteredMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilterChange = (filter) => {
    let filtered = movies;

    if (filter.title) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(filter.title.toLowerCase())
      );
    }

    if (filter.rating) {
      filtered = filtered.filter(movie => movie.rating >= filter.rating);
    }

    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />

      {/* Form to add a new movie */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newMovie = {
            title: e.target.title.value,
            description: e.target.description.value,
            posterURL: e.target.posterURL.value,
            rating: parseFloat(e.target.rating.value)
          };
          addMovie(newMovie);
          e.target.reset();
        }}
      >
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        <input type="text" name="posterURL" placeholder="Poster URL" />
        <input type="number" name="rating" step="0.1" placeholder="Rating" />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;
