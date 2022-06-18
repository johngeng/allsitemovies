import React from 'react';
import { Link } from "react-router-dom";
import {IMovie} from "./MovieDetails";

function Header(props:{OnSearch:Function}) {
    
	const HandleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
		var keyword = e.target.value;	
	
        const headers = {"Authorization": "Bearer Wookie2021"};
        fetch(`https://wookie.codesubmit.io/movies?q=${keyword}`, { headers })
          .then((res) => res.json())
          .then((res) => {
          	props.OnSearch(res.movies);
          }) 			
	}

	return (
		<header className="App-header">
			<Link to="/"><h1>WOOKIE MOVIES</h1></Link>
			<div><input type="text" onChange={HandleSearch} /></div>
		</header>
	);
}

export default Header;