import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  constructor () {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    e.persist()
    let value = e.target.querySelector("#search-term").value.split(" ").join("_")
    this.setState({searchTerm: value})
    fetch(URL + `query=${this.state.searchTerm}`)
      .then(r => r.json())
      .then(json => this.setState({reviews: json.results}))
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submitHandler}>
          <input type="text" id="search-term"/>
          <input type="submit"/>
        </form>
        <MovieReviews reviews={this.state.reviews} titleHeader="Search Results"/>
      </div>
    )
  }
}
