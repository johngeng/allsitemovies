import React from 'react';
import {FaStar,FaStarHalfAlt} from "react-icons/fa";

export default function Ratings(props:{rating: number}) {

	const calculatedRating = props.rating/10*5;
	const fullStars = Array.from({length:Math.floor(calculatedRating)},(e,i)=>{
				return <span key={i}><FaStar /></span>
			});
	const halfStar = Array.from({length:calculatedRating - Math.floor(calculatedRating)>0?1:0},(e,i)=>{
				return <span key={i}><FaStarHalfAlt /></span>
			});

	return(
		<>
			{fullStars}{halfStar}
		</>
		)
}