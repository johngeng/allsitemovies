import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import MovieDetails, { IMovie } from './MovieDetails';

export default function MovieHighlights(props:{movies: Set<IMovie>}){

    const list = Array.from(props.movies).map((m)=>(
        <li key={m.id}>
         <Link to={`/movies/${m.slug}`}><img src={m.backdrop} style={{width:150,height:150}} /></Link>
        </li>
    ));
    return (
       <>  
        {list}
       </>
    );
}