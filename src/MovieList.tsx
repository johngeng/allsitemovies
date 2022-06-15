import React from 'react';
import MovieHighlight, { MovieDetail } from './MovieHighlight';

export default function MovieList(){
    return (
        <div>
            <ul>
                <li>
                   <h2>Genre 1</h2>
                   <MovieHighlight Genre="" />
                </li>
            </ul>
        </div>
    );
}