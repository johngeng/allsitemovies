import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import Home from './Home';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';
import { IMovie } from './MovieDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movies" element={ <MovieList searchResults={undefined} OnSelected={()=>{}} /> } />
        <Route path="/movies/:slug" element={ <MovieDetails movie={undefined} /> } />
      </Routes>
    </div>
  );
}

export default App;
