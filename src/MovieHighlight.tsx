import React from 'react';

export interface MovieDetail {
    Genre:string
}
export default function MovieHighlight({Genre}:MovieDetail){
    return (
        <div>{Genre}
           <img src="" />
        </div>
    );
}