import React from 'react';
import { useState, useEffect } from 'react'
import MovieHighlight from './MovieHighlights';
import { IMovie } from './MovieDetails';

export default function MovieList(){
  //const [genres,setGenres] = useState<string[]>();

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
               console.log(moviesInGenre);
          });
  }

  useEffect(() => {
      getData();
  }, [])

  // const list = genres==null?'': genres.map((e,index)=>(
  //                       <li key={index}>
  //                          <Link to="/movies"><h2>{e}</h2></Link>
  //                          <MovieHighlight Genre={e} />
  //                       </li> 
  //                       ));
  const list = state==null?'': Object.keys(state).map((g)=>(
                    <div key={g}>
                       <h2 >{g}</h2>
                       <ul>
                           <MovieHighlight movies={state![g]} />
                       </ul>
                    </div>
                       ));           
    return (
       <>
        {list}
         </>
    );
}