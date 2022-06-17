
import React from 'react';
import { useState, useEffect } from 'react'

import MovieList from './MovieList';
import { Link } from "react-router-dom";

function Home(){

	return (
		<div>
			<header className="App-header">
				<Link to="/"><h1>WOOKIE MOVIES</h1></Link>
				<div><input type="text" /></div>
			</header>
			<MovieList />
		</div>
		);
}

export default Home;