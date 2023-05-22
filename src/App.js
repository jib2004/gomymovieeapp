import React, { useState,useEffect } from 'react';
// import Movies from './pages/Movies';
// import Fetch from './components/Fetch';
import axios from 'axios'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.posterURL} alt={movie.title} />
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-description">{movie.description}</p>
      <p className="movie-rating">Rating: {movie.rating}</p>
    </div>
  );
};

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onFilter({ title: event.target.value, rating });
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
    onFilter({ title, rating: event.target.value });
  };

  return (
    <div className="filter">
      <input
        className="filter-input"
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        className="filter-input"
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleFilter = ({ title, rating }) => {
    // Filter movies based on title and rating
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
      );
    });

    // Update the filtered movies
    setMovies(filteredMovies);
  };

  const handleAddMovie = () => {
    // Example function to add a new movie
    const newMovie = {
      title: 'New Movie',
      description: 'This is a new movie',
      posterURL: 'https://example.com/poster.jpg',
      rating: 4.5,
    };

    setMovies([...movies, newMovie]);
  };

  const Fetch = () => {
    const [data, setData] = useState([])
      useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
          console.log(res.data)
        })
      },[data])
    return (
      <div>
        <h1>User List</h1>
  
        {data.map((user) =>(
          <ul key={user.id}>
            <li>{user.name}</li>
          </ul>
        ))}
      </div>
      
    )
  }
  
  return (
    <div className="app">
      {/* <h1 className="app-title">Movie List</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={movies} />
      <button className="add-movie-btn" onClick={handleAddMovie}>Add Movie</button>



      <Movies /> */}

      <Fetch />
    </div>
  );
};

export default App;
