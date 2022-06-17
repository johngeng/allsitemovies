import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieHighlights from './MovieHighlights';

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
    });

    const movieDetails = movie!=null?
        <div>
            <img src={movie.backdrop} />
            <h3>{movie.title} <span>{movie.imdb_rating}</span></h3>
            <div><span>{movie.released_on.toString()}</span> | <span>{movie.length}</span> | <span>{movie.director}</span></div>
            <div><label>cast:</label>{movie.cast.join(",")}</div>
            <p>{movie.overview}</p>
        </div>
        :'';
    return (
        <>{movieDetails}</>
    );
}
