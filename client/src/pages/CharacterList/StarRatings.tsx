import React from "react";
import StarRatings from "react-star-ratings";

export default function StarRatingsComp({ stars }) {
  const numStars: number = parseInt(stars);
  return (
    <div className="unit-stars">
      <StarRatings
        rating={numStars}
        starRatedColor="red"
        numberOfStars={6}
        name="rating"
        starDimension={13}
        starSpacing={1}
      />
      {isNaN(stars) ? <span>+</span> : ""}
    </div>
  );
}
