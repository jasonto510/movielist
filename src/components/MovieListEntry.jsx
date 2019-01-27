import MovieList from './MovieList.jsx'
import React from 'react'
import ReactDOM from 'react-dom'

var MovieListEntry = (props) => (
  <div className = "movieListEntry">
    <div className = "movieTitles">{props.movie.title}</div>
  </div>
)


export default MovieListEntry 