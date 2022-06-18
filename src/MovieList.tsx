import React from 'react';
import { useState, useEffect } from 'react'
import MovieHighlight from './MovieHighlights';
import { IMovie } from './MovieDetails';

export default function MovieList(props:{searchResults:Set<IMovie>|undefined, OnSelected:Function}){

  let movies : Set<IMovie[]> = new Set();
  let moviesInGenre : Record<string,Set<IMovie>> = {};
  let [state,setState] = useState<Record<string,Set<IMovie>>>();

  const getData = () => {
        const headers = {"Authorization": "Bearer Wookie2021"};
        fetch('https://wookie.codesubmit.io/movies', { headers })
          .then((res) => res.json())
          .then((res) => {
           let genres: Array<string> = [];
           res.movies.map((o:any)=>{
               genres = [...genres,...o.genres];
               genres.map((g:string)=>{
                   movies.add(o);
                   if(!moviesInGenre[g]){
                       moviesInGenre[g] = new Set();
                   }
                   moviesInGenre[g].add(o);
               });

           })

          }).then(()=>{
              setState(moviesInGenre);
          });
  }

  useEffect(() => {
    getData();
  }, [])

  const HandleSelect = ()=>{
      props.OnSelected();
  }

  const list = state==null?'': Object.keys(state).map((g)=>(
                    <div className="movielist" key={g}>
                       <h2 >{g}</h2>
                       <ul>
                           <MovieHighlight movies={state![g]} />
                       </ul>
                    </div>
                       ));  

  const searchResults = props.searchResults && Object.keys(props.searchResults).length>0? 
                  <div className="movielist"> 
                      <h2>Search Result:</h2>
                      <ul onClick={HandleSelect}><MovieHighlight movies={props.searchResults} /></ul>
                  </div>
                  :null;  
    return (
       <>
        {searchResults?searchResults:list}
         </>
    );
}