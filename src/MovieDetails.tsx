import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieHighlights from './MovieHighlights';
import Header from './Header';
import MovieList from './MovieList';
import Rating from './Ratings';

import './App.css';

export interface IMovie{
    id:string,
    imdb_rating:number,
    length:string,
    overview:string,
    poster:string,
    released_on:Date,
    slug:string,
    title:string,
    backdrop:string,
    cast:string[],
    classification:string,
    director:string,
    genres:string[],

}

export default function MovieDetails(props:{movie:IMovie|undefined}){
    const slug = props.movie?props.movie.id:useParams()["slug"];
    const [movie,setMovie] = useState<IMovie|undefined>();
    const [searchResults,setSearchResults] = React.useState<Set<IMovie>>();

    const HandleSearch = (results:Set<IMovie>)=>{

        setSearchResults(results);
    }

    const HandleSelected = (movie:IMovie) =>{
        setSearchResults(undefined);
        location.reload();
    }

    const getData = () => {
        const headers = {"Authorization": "Bearer Wookie2021"};
        fetch(`https://wookie.codesubmit.io/movies/${slug}`, { headers })
          .then((res) => res.json())
          .then((res) => {
            setMovie(res);
          })
   }
  
    useEffect(()=>{
        getData();
    }, []);

    const movieDetails = movie!=null&&searchResults==null?
        <div className="moviedetails">
            <div className="poster"><img src={movie.poster} /></div>
            <h3>{movie.title} <span>{movie.imdb_rating}</span> <span className="rating">{<Rating rating={movie.imdb_rating} />}</span> </h3>
            <div><span>{new Date(parseInt(movie.released_on.toString())).getFullYear()}</span> | <span>{movie.length}</span> | <span>{movie.director}</span></div>
            <div>{movie.cast.join(",")}</div>
            <p>{movie.overview}</p>
        </div>
        :'';
    const showSearchResults = searchResults?<MovieList searchResults={searchResults} OnSelected={HandleSelected} />:'';
    return (
        <>
        <Header OnSearch={HandleSearch} />
        {movieDetails}
        {showSearchResults}
        </>
    );
}
