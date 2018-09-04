// Code MovieReviews Here

import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
    <h2>{props.titleHeader}</h2>
    <ul>
      {props.reviews !== [] ? props.reviews.map(review => <li>{review.display_title + " - " + review.headline}</li>) : null}
    </ul>
    </div>
  )
}

export default MovieReviews
