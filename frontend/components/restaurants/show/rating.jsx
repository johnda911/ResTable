import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const Rating = (props) => {
  const rating = props.rating;
  const hasHalf = rating - Math.floor(rating) > 0;
  let roundedRating = Math.round(rating * 10) / 10;
  return (
    <div>
      {[...Array(Math.floor(rating))].map(() => (
        <BsStarFill className="rating-star-icon" key={Math.random()} />
      ))}
      {hasHalf && (
        <BsStarHalf className="rating-star-icon" key={Math.random()} />
      )}
      <span>{roundedRating}</span>
    </div>
  );
};

export default Rating;
