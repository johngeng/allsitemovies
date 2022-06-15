import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          WOOKIE MOVIES
        </h1>
        <div><input type="text" /></div>
      </header>
      <MovieList />
    </div>
  );
}

export default App;
