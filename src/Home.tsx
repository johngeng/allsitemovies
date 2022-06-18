
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import {Link} from 'react-router-dom';
import {IMovie} from './MovieDetails';

function Home(){
	const [searchResults,setSearchResults] = React.useState<Set<IMovie>>();

	const HandleSearch = (results:Set<IMovie>)=>{

		setSearchResults(results);
	}
	return (
		<div>
			<Header OnSearch={HandleSearch} />
			<MovieList searchResults={searchResults} OnSelected={()=>{}} />
		</div>
		);
}

export default Home;